// app/api/reports/route.js

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";
import Expense from "app/lib/models/Expense";
import Product from "app/lib/models/Product";
export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");

    if (action === "metrics") {
      const period = searchParams.get("period") || "monthly";
      let filter = {};

      // Build the filter based on the requested period.
      if (period === "monthly") {
        const month = parseInt(searchParams.get("month"));
        const year = parseInt(searchParams.get("year"));
        if (!month || !year) {
          return NextResponse.json(
            { success: false, error: "For monthly metrics, month and year are required." },
            { status: 400 }
          );
        }
        filter = { month, year };
      } else if (period === "quarterly") {
        const quarter = parseInt(searchParams.get("quarter"));
        const year = parseInt(searchParams.get("year"));
        if (!quarter || !year) {
          return NextResponse.json(
            { success: false, error: "For quarterly metrics, quarter and year are required." },
            { status: 400 }
          );
        }
        filter = { quarter, year };
      } else if (period === "yearly") {
        const year = parseInt(searchParams.get("year"));
        if (!year) {
          return NextResponse.json(
            { success: false, error: "For yearly metrics, year is required." },
            { status: 400 }
          );
        }
        filter = { year };
      } else {
        return NextResponse.json(
          { success: false, error: "Invalid period. Use monthly, quarterly, or yearly." },
          { status: 400 }
        );
      }

      // Fetch orders for the period and populate the product details.
      const orders = await Order.find(filter)
        .populate("products.product")
        .exec();

      let totalSales = 0;
      let totalProfit = 0;

      // Process each order.
      for (const order of orders) {
        totalSales += order.totalPrice; // Use the stored totalPrice

        let orderProfit = 0;
        for (const item of order.products) {
          // Default cost: product's base makingPrice.
          let cost = item.product.makingPrice;

          // If a variant is specified, try to find a matching variant option.
          // We assume that the order’s item.variant should match an option’s "quantity" value.
          if (item.variant) {
            for (const variantObj of item.product.variants || []) {
              const matchingOption = variantObj.options.find(
                (opt) => opt.quantity === item.variant
              );
              if (matchingOption) {
                cost = matchingOption.makingPrice;
                break; // Use the first matching option found.
              }
            }
          }
          // Compute profit for this product line.
          // (Selling price for the line) - (cost per unit * quantity)
          const itemProfit = item.price - cost * item.quantity;
          orderProfit += itemProfit;
        }
        totalProfit += orderProfit;
      }

      // Fetch expense data for the same period.
      let expenseFilter = {};
      if (period === "monthly") {
        expenseFilter = { month: filter.month, year: filter.year };
      } else if (period === "quarterly") {
        expenseFilter = { quarter: filter.quarter, year: filter.year };
      } else if (period === "yearly") {
        expenseFilter = { year: filter.year };
      }
      const expenseDoc = await Expense.findOne(expenseFilter).exec();
      let totalExpense = 0;
      if (expenseDoc && Array.isArray(expenseDoc.expenses)) {
        totalExpense = expenseDoc.expenses.reduce((sum, exp) => sum + exp.amount, 0);
      }
      const netProfit = totalProfit - totalExpense;

      return NextResponse.json({
        success: true,
        data: {
          totalSales,
          totalProfit,
          orderCount: orders.length,
          totalExpense,
          netProfit,
        },
      });
    } 
    else if (action === "bestSelling") {
      // Get the current year dynamically
      const currentYear = new Date().getFullYear();
  
      // The limit for number of top products to return (fixed to 5)
      const limit = 5;
  
      // Aggregation pipeline:
      const bestSellingPipeline = [
          {
              $match: { year: currentYear } // Filter by current year using the 'year' field in schema
          },
          { $unwind: "$products" },
          {
              $group: {
                  _id: "$products.product",
                  totalQuantitySold: { $sum: "$products.quantity" },
                  totalSales: { $sum: { $multiply: ["$products.quantity", "$products.price"] } },
              },
          },
          { $sort: { totalQuantitySold: -1 } }, // Sort by highest quantity sold
          { $limit: limit }, // Limit to top 5 products
          {
              $lookup: {
                  from: "products",
                  localField: "_id",
                  foreignField: "_id",
                  as: "productDetails",
              },
          },
          { $unwind: "$productDetails" },
          {
              $project: {
                  productDetails: 1,
                  totalQuantitySold: 1,
                  totalSales: 1,
              },
          },
      ];
  
      const bestSelling = await Order.aggregate(bestSellingPipeline);
      return NextResponse.json({ success: true, data: bestSelling });
  }
  
    else {
      return NextResponse.json(
        { success: false, error: "Invalid action. Use 'metrics' or 'bestSelling'." },
        { status: 400 }
      );
    }

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

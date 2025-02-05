import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";
import Expense from "app/lib/models/Expense";

export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action");

    if (action === "yearlyMetrics") {
      const year = parseInt(searchParams.get("year"));
      if (!year) {
        return NextResponse.json(
          { success: false, error: "Year is required for yearly metrics." },
          { status: 400 }
        );
      }

      // Prepare data structure for 12 months
      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        month: i + 1,
        totalSales: 0,
        totalProfit: 0,
        orderCount: 0,
        totalExpense: 0,
        netProfit: 0,
      }));

      // Fetch all orders for the given year
      const orders = await Order.find({ year }).populate("products.product").exec();

      // Process Orders
      for (const order of orders) {
        const monthIndex = order.month - 1;
        if (monthIndex >= 0 && monthIndex < 12) {
          monthlyData[monthIndex].orderCount += 1;
          monthlyData[monthIndex].totalSales += order.totalPrice;

          let orderProfit = 0;
          for (const item of order.products) {
            let cost = item.product.makingPrice;

            // Check for variant-specific price
            if (item.variant) {
              for (const variantObj of item.product.variants || []) {
                const matchingOption = variantObj.options.find(
                  (opt) => opt.quantity === item.variant
                );
                if (matchingOption) {
                  cost = matchingOption.makingPrice;
                  break;
                }
              }
            }

            const itemProfit = item.price - cost * item.quantity;
            orderProfit += itemProfit;
          }

          monthlyData[monthIndex].totalProfit += orderProfit;
        }
      }

      // Fetch all expenses for the year
      const expenses = await Expense.find({ year }).exec();

      // Process Expenses
      for (const expense of expenses) {
        if (expense.month >= 1 && expense.month <= 12) {
          const monthIndex = expense.month - 1;
          if (Array.isArray(expense.expenses)) {
            monthlyData[monthIndex].totalExpense = expense.expenses.reduce(
              (sum, exp) => sum + exp.amount,
              0
            );
          }
        }
      }

      // Compute netProfit
      monthlyData.forEach((month) => {
        month.netProfit = month.totalProfit - month.totalExpense;
      });

      return NextResponse.json({ success: true, data: monthlyData });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid action. Use 'yearlyMetrics'." },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

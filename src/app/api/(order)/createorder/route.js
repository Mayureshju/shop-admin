import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";
import Product from "app/lib/models/Product";

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();

    if (!data.products || !Array.isArray(data.products) || data.products.length === 0) {
      return NextResponse.json({ success: false, error: "At least one product is required." }, { status: 400 });
    }

    if (!data.totalPrice || typeof data.totalPrice !== "number") {
      return NextResponse.json({ success: false, error: "Total price must be a number." }, { status: 400 });
    }

    for (let item of data.products) {
      const productExists = await Product.findById(item.product);
      if (!productExists) {
        return NextResponse.json({ success: false, error: `Invalid product ID: ${item.product}` }, { status: 400 });
      }
      if (!item.quantity || item.quantity <= 0) {
        return NextResponse.json({ success: false, error: `Invalid quantity for ${productExists.name}` }, { status: 400 });
      }
      if (!item.price || item.price <= 0) {
        return NextResponse.json({ success: false, error: `Invalid price for ${productExists.name}` }, { status: 400 });
      }
    }

    // Generate auto-incrementing order name
    const lastOrder = await Order.findOne().sort({ createdAt: -1 });
    const newOrderNumber = lastOrder ? parseInt(lastOrder.orderName.split("-")[1]) + 1 : 1;
    const orderName = `ORD-${newOrderNumber}`;

    const newOrder = new Order({
      products: data.products.map((item) => ({
        product: item.product,
        variant: item.variant || null, // If variant is missing, store as null
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: data.totalPrice,
      orderName,
      orderNote: data.orderNote || "",
    });

    const savedOrder = await newOrder.save();
    return NextResponse.json({ success: true, message: "Order created successfully.", order: savedOrder }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

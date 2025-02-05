import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";

export async function PUT(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const { orderId, products, totalPrice, orderNote } = data;

    if (!orderId) {
      return NextResponse.json({ success: false, error: "Order ID is required." }, { status: 400 });
    }

    const order = await Order.findById(orderId);
    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found." }, { status: 404 });
    }

    if (products) {
      order.products = products.map((item) => ({
        product: item.product,
        variant: item.variant || null, // Ensure variant is optional
        quantity: item.quantity,
        price: item.price,
      }));
    }

    if (totalPrice) order.totalPrice = totalPrice;
    if (orderNote) order.orderNote = orderNote;

    await order.save();

    return NextResponse.json({ success: true, message: "Order updated successfully.", order }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

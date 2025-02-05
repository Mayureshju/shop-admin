import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";

export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Order ID is required." }, { status: 400 });
    }

    // Fetch order by ID
    const order = await Order.findById(id).populate("products.product");

    if (!order) {
      return NextResponse.json({ success: false, error: "Order not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true, order }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

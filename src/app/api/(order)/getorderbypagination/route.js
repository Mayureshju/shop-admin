import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";
import Category from "app/lib/models/Category";
export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;

    const totalOrders = await Order.countDocuments();
    const totalPages = Math.ceil(totalOrders / limit); // Calculate total pages

    const orders = await Order.find()
    .sort({ purchaseDate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(
      { success: true, orders, totalOrders, totalPages, page, limit },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

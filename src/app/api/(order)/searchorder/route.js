import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Order from "app/lib/models/Order";

export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";

    // Search orders in 'orderName' and 'orderNote', limit results to 10
    const orders = await Order.find({
      $or: [
        { orderName: { $regex: query, $options: "i" } }, // Case-insensitive search in 'orderName'
        { orderNote: { $regex: query, $options: "i" } }, // Case-insensitive search in 'orderNote'
      ],
    })
      .limit(10) // Limit to 10 results
      .sort({ createdAt: -1 }); // Sort by newest orders first

    return NextResponse.json({ success: true, orders }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

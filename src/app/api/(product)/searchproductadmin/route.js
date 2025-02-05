import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";

export async function GET(req) {
  try {
    connectToDatabase();
    
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";

    if (!query) {
      return NextResponse.json({ success: false, error: "Search query is required" }, { status: 400 });
    }

    // Search for products by name, description, price, or _id
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Case-insensitive search
        { description: { $regex: query, $options: "i" } },
        { price: isNaN(query) ? undefined : Number(query) }, // Match price if it's a number
        { _id: query.length === 24 ? query : undefined }, // Match _id if it's a valid ObjectId
      ].filter(Boolean),
    })
      .limit(10) // Limit results to 10
      .lean();

    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

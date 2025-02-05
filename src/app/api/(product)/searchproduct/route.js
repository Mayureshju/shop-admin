import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";
import Category from "app/lib/models/Category";
export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse query parameters
    const url = new URL(req.url);
    const query = url.searchParams.get("query");

    // Validate search query
    if (!query) {
      return NextResponse.json(
        { success: false, error: "Search query is required." },
        { status: 400 }
      );
    }

    // Find up to 5 matching product suggestions (case insensitive search)
    const products = await Product.find(
      { name: { $regex: query, $options: "i" } } // "i" makes it case-insensitive
    )
      .select("name slug category image") // Select only necessary fields
      .populate("category", "name slug") // Populate category name & slug
      .limit(5); // Limit to 5 suggestions

    return NextResponse.json(
      { success: true, suggestions: products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

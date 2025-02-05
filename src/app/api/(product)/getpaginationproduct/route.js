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
    const page = parseInt(url.searchParams.get("page")) || 1; // Default page = 1
    const limit = 10; // Fixed limit of 10 products per page
    const skip = (page - 1) * limit; // Calculate the number of items to skip

    // Fetch products with pagination and populate category details
    const products = await Product.find()
      .populate("category", "name slug") // Populate only category name & slug
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // Sort by newest products first

    // Get total count for pagination metadata
    const totalProducts = await Product.countDocuments();
    const totalPages = Math.ceil(totalProducts / limit);

    return NextResponse.json(
      {
        success: true,
        page,
        totalPages,
        totalProducts,
        products,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

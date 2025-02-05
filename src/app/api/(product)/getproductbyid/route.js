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
    const productId = url.searchParams.get("id"); // Get product ID from query params

    // Validate productId
    if (!productId) {
      return NextResponse.json(
        { success: false, error: "Product ID is required." },
        { status: 400 }
      );
    }

    // Find the product by ID and populate category details
    const product = await Product.findById(productId).populate("category");

    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

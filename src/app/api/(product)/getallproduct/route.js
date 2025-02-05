import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all products with only selected fields
    const products = await Product.find()
      .select("_id price isVariant variants name") // Fetch only required fields
      .sort({ createdAt: -1 }); // Sort by newest products first

    return NextResponse.json(
      {
        success: true,
        totalProducts: products.length,
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

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";
import Category from "app/lib/models/Category";

export async function DELETE(req) {
  try {
    // Connect to the database
    connectToDatabase();

    // Parse the query parameter from the request
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    // Validate that the product ID is provided
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Product ID is required." },
        { status: 400 }
      );
    }

    // Find the product by ID
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found." },
        { status: 404 }
      );
    }

    // Remove the product from the associated category
    await Category.findByIdAndUpdate(
      product.category,
      { $pull: { products: id } }
    );

    // Delete the product
    await Product.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Product deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

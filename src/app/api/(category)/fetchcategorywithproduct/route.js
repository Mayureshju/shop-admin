import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the query parameter from the request
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");

    // Validate that the slug is provided
    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Category slug is required." },
        { status: 400 }
      );
    }

    // Find the category by slug and populate products
    const category = await Category.findOne({ slug }).populate("products");

    if (!category) {
      return NextResponse.json(
        { success: false, error: "Category not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, category },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

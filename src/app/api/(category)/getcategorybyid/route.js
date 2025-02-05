import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Get the category ID from the request query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validate that the ID is provided
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Category ID is required." },
        { status: 400 }
      );
    }

    // Find the category by ID
    const category = await Category.findById(id);

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

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function DELETE(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the query parameter from the request
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    // Validate that the ID is provided
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Category ID is required." },
        { status: 400 }
      );
    }

    // Find the category by ID and delete it
    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return NextResponse.json(
        { success: false, error: "Category not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Category deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

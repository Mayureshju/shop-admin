import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function GET(req) {
  try {
    await connectToDatabase();
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page")) || 1; // Default page = 1
    const limit = parseInt(url.searchParams.get("limit")) || 10; // Default limit = 10
    const skip = (page - 1) * limit; // Calculate the number of items to skip

    // Fetch categories with pagination
    const categories = await Category.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); // Sort by newest categories first

    // Get total count for pagination metadata
    const totalCategories = await Category.countDocuments();
    const totalPages = Math.ceil(totalCategories / limit);

    return NextResponse.json(
      {
        success: true,
        page,
        totalPages,
        totalCategories,
        categories,
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

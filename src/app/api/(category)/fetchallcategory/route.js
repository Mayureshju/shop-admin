import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse query parameters
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get("limit")) || 10; // Default limit is 10

    // Fetch categories with only `_id` and `name`
    const categories = await Category.find().select("_id name").limit(limit);

    return NextResponse.json(
      { success: true, categories },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function GET(req) {
  try {
    await connectToDatabase();
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get("q") || ""; 

 
    const categories = await Category.find({
      $or: [
        { name: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search in 'name'
        { description: { $regex: searchQuery, $options: "i" } } // Case-insensitive search in 'description'
      ],
    })
      .limit(10) // Return only 10 results
      .sort({ createdAt: -1 }); // Sort by newest categories first

    return NextResponse.json(
      {
        success: true,
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

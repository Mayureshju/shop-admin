import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const body = await req.json();

    const { name, description, seoTitle, seoDescription, canonicalUrl, products } = body;

    // Validate that name is provided
    if (!name) {
      return NextResponse.json(
        { success: false, error: "Category name is required." },
        { status: 400 }
      );
    }

    // Generate the slug from the name
    const slug = name.trim().toLowerCase().replace(/\s+/g, "-");

    // Create a new category with the slug
    const newCategory = new Category({
      name,
      description,
      seoTitle,
      seoDescription,
      canonicalUrl,
      slug, // Use the generated slug
      products,
    });

    // Save the category to the database
    const savedCategory = await newCategory.save();

    return NextResponse.json(
      { success: true, message: "Category created successfully.", category: savedCategory },
      { status: 201 }
    );
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Category name or slug already exists." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

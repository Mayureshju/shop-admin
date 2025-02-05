import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Category from "app/lib/models/Category";

export async function PUT(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const body = await req.json();
    const { id, name, description, seoTitle, seoDescription, canonicalUrl } = body;

    // Validate that the ID is provided
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Category ID is required." },
        { status: 400 }
      );
    }

    // Update fields
    const updatedFields = { name, description, seoTitle, seoDescription, canonicalUrl };

    // If name is updated, regenerate the slug
    if (name) {
      updatedFields.slug = name.trim().toLowerCase().replace(/\s+/g, "-");
    }

    // Find the category by ID and update it
    const updatedCategory = await Category.findByIdAndUpdate(id, updatedFields, {
      new: true, // Return the updated document
      runValidators: true, // Run validation rules
    });

    if (!updatedCategory) {
      return NextResponse.json(
        { success: false, error: "Category not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Category updated successfully.", category: updatedCategory },
      { status: 200 }
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

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";
import Category from "app/lib/models/Category";

export async function PUT(req) {
  try {
    // Connect to the database
    connectToDatabase();

    // Parse the request body
    const data = await req.json();

    // Validate that the product ID is provided
    const { id, category, isVariant, variants, ...updateFields } = data;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Product ID is required." },
        { status: 400 }
      );
    }

    // Fetch the existing product
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return NextResponse.json(
        { success: false, error: "Product not found." },
        { status: 404 }
      );
    }

    // Validate category if provided
    if (category) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return NextResponse.json(
          { success: false, error: "Invalid category ID. Category does not exist." },
          { status: 400 }
        );
      }
    }

    // Validate isVariant flag and variants
    if (isVariant) {
      if (!Array.isArray(variants) || variants.length === 0) {
        return NextResponse.json(
          { success: false, error: "Variants are required when isVariant is true." },
          { status: 400 }
        );
      }

      for (const variant of variants) {
        if (!["liter", "kilo"].includes(variant.type)) {
          return NextResponse.json(
            { success: false, error: "Variant type must be either 'liter' or 'kilo'." },
            { status: 400 }
          );
        }

        if (!Array.isArray(variant.options) || variant.options.length === 0) {
          return NextResponse.json(
            { success: false, error: "Each variant must have at least one option." },
            { status: 400 }
          );
        }

        for (const option of variant.options) {
          if (!option.quantity || typeof option.price !== "number") {
            return NextResponse.json(
              { success: false, error: "Each option must have a quantity and price." },
              { status: 400 }
            );
          }
        }
      }
    }

    // If name is updated, regenerate the slug
    if (updateFields.name) {
      updateFields.slug = updateFields.name.trim().toLowerCase().replace(/\s+/g, "-");
    }

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...updateFields, category, isVariant, variants },
      { new: true, runValidators: true }
    );

    if (category && existingProduct.category.toString() !== category) {
      // Remove the product from the old category
      await Category.findByIdAndUpdate(
        existingProduct.category,
        { $pull: { products: id } }
      );

      // Add the product to the new category
      await Category.findByIdAndUpdate(
        category,
        { $push: { products: id } }
      );
    }

    return NextResponse.json(
      { success: true, message: "Product updated successfully.", data: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Product from "app/lib/models/Product";
import Category from "app/lib/models/Category";


export async function POST(req) {
  try {
    connectToDatabase();
    const data = await req.json();

    // Validate category
    const categoryExists = await Category.findById(data.category);
    if (!categoryExists) {
      return NextResponse.json(
        { success: false, error: "Invalid category ID. Category does not exist." },
        { status: 400 }
      );
    }

    // Validate isVariant flag and variants
    if (data.isVariant) {
      if (!Array.isArray(data.variants) || data.variants.length === 0) {
        return NextResponse.json(
          { success: false, error: "Variants are required when isVariant is true." },
          { status: 400 }
        );
      }

      for (const variant of data.variants) {
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

    data.slug = data.name.trim().toLowerCase().replace(/\s+/g, "-");
    console.log("Slug in API:", data.slug);

    
    // Create the product
    const product = new Product(data);
    const savedProduct = await product.save();

    await Category.findByIdAndUpdate(
      savedProduct.category,
      { $push: { products: savedProduct._id } },
      { new: true }
    );
   
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

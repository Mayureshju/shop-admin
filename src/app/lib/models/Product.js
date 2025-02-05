import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    shortDescription: { type: String },
    price: { type: Number },
    makingPrice: { type: Number },
    active: { type: Boolean, default: true },
    image: [{ type: String, required: true }],
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    isVariant: { type: Boolean, default: false },
    variants: [
      {
        type: {
          type: String,
          enum: ["liter", "kilo"],
       
        },
        options: [
          {
            quantity: { type: String},
            price: { type: Number},
            makingPrice: { type: Number},
          },
        ],
      },
    ],
    slug: { type: String, required: true, unique: true },
    benefits: { type: String },
    bestSelling: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    salesCount: { type: Number, default: 0 },
    seoTitle: { type: String },
    seoDescription: { type: String },
    canonicalUrl: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product; // Default Export

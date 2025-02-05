import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    seoTitle: { type: String },
    seoDescription: { type: String },
    canonicalUrl: { type: String },
    slug: { type: String, required: true, unique: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
}, { timestamps: true });

const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);

export default Category;

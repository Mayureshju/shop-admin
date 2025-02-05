const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            variant: { type: String, default: null },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    totalPrice: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
    orderName: { type: String, unique: true, required: true },
    orderNote: { type: String },

    // Additional Fields for Tracking
    month: { type: Number, default: function () { return new Date().getMonth() + 1; } }, // Stores month (1-12)
    year: { type: Number, default: function () { return new Date().getFullYear(); } }, // Stores year
    quarter: { 
        type: Number, 
        default: function () { 
            return Math.floor((new Date().getMonth() + 3) / 3); 
        } // Stores quarter (1-4)
    }
}, { timestamps: true });

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order; 

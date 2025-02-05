import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    month: { 
      type: Number, 
      required: true, 
      default: function () { return new Date().getMonth() + 1; } // Auto-set current month (1-12)
    },
    year: { 
      type: Number, 
      required: true, 
      default: function () { return new Date().getFullYear(); } // Auto-set current year
    },
    quarter: { 
      type: Number, 
      required: true, 
      default: function () { return Math.floor((new Date().getMonth() + 3) / 3); } // Auto-calculate quarter (1-4)
    },
    expenses: [
      {
        name: { type: String, required: true }, // Rent, Electricity, etc.
        amount: { type: Number, required: true } // Expense amount
      }
    ]
  },
  { timestamps: true }
);

const Expense = mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
export default Expense;

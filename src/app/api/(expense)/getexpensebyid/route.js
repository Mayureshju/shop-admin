import { NextResponse } from "next/server";
import mongoose from "mongoose"; // Import mongoose to use ObjectId validation
import connectToDatabase from "app/lib/utils";
import Expense from "app/lib/models/Expense";

export async function GET(req) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); // Keep id as a string

    // Check if id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid Expense ID format" },
        { status: 400 }
      );
    }

    const expense = await Expense.findById(id);

    if (!expense) {
      return NextResponse.json(
        { success: false, message: "Expense not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: expense });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

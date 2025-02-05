import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Expense from "app/lib/models/Expense";


export async function PUT(req) {
  try {
    connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "ID is required" }, { status: 400 });
    }
    const data = await req.json();
    const updatedExpense = await Expense.findByIdAndUpdate(id, data, { new: true });

    if (!updatedExpense) {
      return NextResponse.json({ success: false, error: "Expense not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedExpense });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

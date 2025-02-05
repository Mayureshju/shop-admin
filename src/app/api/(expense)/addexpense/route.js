import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Expense from "app/lib/models/Expense";


export async function POST(req) {
  try {
    connectToDatabase();
    const data = await req.json();
    const newExpense = new Expense(data);
    await newExpense.save();
    return NextResponse.json({ success: true, data: newExpense }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

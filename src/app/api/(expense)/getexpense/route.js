import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import Expense from "app/lib/models/Expense";

export async function GET(req) {
  try {
    connectToDatabase();
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;
    const expenses = await Expense.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 }); 

    const totalCount = await Expense.countDocuments();

    return NextResponse.json({
      success: true,
      data: expenses,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      totalExpenses: totalCount
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

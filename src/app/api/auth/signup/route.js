import { NextResponse } from "next/server";
import connectToDatabase from "app/lib/utils";
import { hash } from "bcryptjs";
import User from "app/lib/models/User";
export async function POST(request) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the JSON body
    const body = await request.json();
    const { email, password } = body;

    // Check if a user with this email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 422 }
      );
    }

    // Hash the password before saving it
    const hashedPassword = await hash(password, 12);

    // Create a new user document (adjust field names as needed)
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

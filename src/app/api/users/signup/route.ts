import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/userModel";
import bcryptjs from "bcryptjs";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstname, lastname, email, password } = reqBody;

    // check user is exist or not
    const user = await User.findOne({ email: email });
    if (user) {
      return NextResponse.json(
        {
          message: "Email address already exists",
        },
        { status: 409 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // create new user and save it to db
    const createdUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    await createdUser.save();

    return NextResponse.json(
      { message: "User registration successful" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ meaasge: error.meaasge }, { status: 500 });
  }
}

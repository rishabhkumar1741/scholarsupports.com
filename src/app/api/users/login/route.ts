import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/app/models/userModel";
import jwt from 'jsonwebtoken';
import { use } from "react";
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    //check if user is present or not
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
          message: "The provided email address does not exist in our system.",
        },
        { status: 404 }
      );
    }
    //check if password is correct or not
    const validatepassword = await bcrypt.compare(password, user.password);
    if (!validatepassword) {
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Incorrect password. Please try again.",
        },
        { status: 401 }
      );
    }
    //create a token data
    const tokendata = {
      id:user._id,
      email:user.email
    }
    //create token
    const token = await jwt.sign(tokendata,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
    const responce = NextResponse.json({
      message: "Login successful"},{status:200});
    responce.cookies.set("token",token,{httpOnly:true});
    return responce;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

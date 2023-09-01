import {connect} from "@/app/dbConfig/dbConfig"
import { NextRequest,NextResponse } from "next/server"
import User from "@/app/models/userModel"

connect()

export async function POST(request:NextRequest) {
    try {
        const reqBody= await request.json();
        const {token} = reqBody;

        const user =  await User.findOne({verifytoken:token,verifytokenexpiry:{$gt:Date.now()}})
        if(!user){
            return NextResponse.json({message:"Invalid token"},{status:404})
        }
        console.log(user);
        user.isverified= true;
        user.verifytoken=undefined;
        user.verifytokenexpiry=undefined
        await user.save();
        return NextResponse.json({message:"Email verified successfully"},{status:200})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
    
}

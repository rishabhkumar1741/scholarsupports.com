import {connect} from "@/app/dbConfig/dbConfig"
import { getDataFromToken } from "@/app/helper/getDataFromToken"
import User from '@/app/models/userModel'
import { NextRequest,NextResponse } from "next/server"

export async function GET(request:NextRequest)
{
    try {
        const userid = await getDataFromToken(request);
        const userdata = await User.findOne({_id:userid}).select({password:0,forgotpasswordtoken:0,forgotpasswordtokenexpiry:0,verifytoken:0,verifytokenexpiry:0});
        return NextResponse.json({data:userdata},{status:200})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
}
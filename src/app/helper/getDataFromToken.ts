import { NextRequest } from "next/server";
import  Jwt  from "jsonwebtoken";

export const getDataFromToken = async (request:NextRequest)=>{
    try {
        const token= request.cookies.get("token")?.value||"";
        const decodetoken:any =  Jwt.verify(token,process.env.TOKEN_SECRET!)
        return decodetoken.id;
    } catch (error:any) {
        throw new Error(error.message)
    }
}
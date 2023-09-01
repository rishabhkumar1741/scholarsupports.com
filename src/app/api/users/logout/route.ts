import { NextRequest,NextResponse } from "next/server"
export  async function GET(request:NextRequest) {
    try {
        const responce = NextResponse.json({message:"Logout successfull",success:true},{status:200});
        responce.cookies.set("token","",{httpOnly:true})
        return responce;
        
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
    return 
}
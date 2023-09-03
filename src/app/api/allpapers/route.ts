import { NextRequest,NextResponse } from "next/server";
import path from 'path'
import fs from 'fs'
import ExamPapers from "@/app/models/exampaperModel";
import{connect} from '@/app/dbConfig/dbConfig'
connect();
export async function GET(request:NextRequest)
{
    try {
        const filesdata = await ExamPapers.find().select({createdAt:0,updatedAt:0});
        return NextResponse.json({message:"success",fileList:filesdata},{status:200})
        
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    }
}
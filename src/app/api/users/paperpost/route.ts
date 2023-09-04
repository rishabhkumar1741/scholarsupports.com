import { NextRequest, NextResponse } from "next/server";

import ExamPapers from "@/app/models/exampaperModel";
import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    const paperinfo = await request.json()

    const userid = await getDataFromToken(request);
    const createPaper = new ExamPapers({
      ...paperinfo,
      user: userid,
      fileurl:paperinfo.fileurl
    });
    const savepaperinfo = await createPaper.save();

    

    
    if (savepaperinfo) {
      return NextResponse.json(
        { message: "Paper is Created successfully" },
        { status: 201 }
      );
    } else {
      throw Error("Error while creating the Paper");
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs, { writeFileSync } from "fs";
import ExamPapers from "@/app/models/exampaperModel";
import { getDataFromToken } from "@/app/helper/getDataFromToken";
import { connect } from "@/app/dbConfig/dbConfig";

connect();

export async function POST(request: NextRequest) {
  try {
    // const resbody = await request.json();
    const resfomm = await request.formData();
    const file: File | null = resfomm.get("file") as unknown as File;
    const paperinfo = {
      course: resfomm.get("course"),
      semester: resfomm.get("semester"),
      college: resfomm.get("college"),
      papertype: resfomm.get("papertype"),
      level: resfomm.get("level"),
      batch: resfomm.get("batch"),
      subject: resfomm.get("subject"),
    };
    // vit/mca/semester/papertype/batch
    const filename =
      paperinfo.college +
      "" +
      paperinfo.course +
      "" +
      paperinfo.semester +
      "" +
      paperinfo.papertype +
      "" +
      paperinfo.batch +
      "date" +
      Date.now() +
      "." +
      file.name.split(".").pop();
    const filepath = path.join(
      __dirname,
      "../../../../../../public/papers/",
      filename
    );
    const userid = await getDataFromToken(request);

    const createPaper = new ExamPapers({
      ...paperinfo,
      filename: filename,
      user: userid,
    });

    const savepaperinfo = await createPaper.save();
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    writeFileSync(filepath, buffer);
    
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

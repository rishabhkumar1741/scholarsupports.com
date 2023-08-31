import { NextRequest, NextResponse } from "next/server";
export function POST()
{
    return NextResponse.json(
        { message: "LOGIN ROUTE" },
        { status: 200 }
      );
}
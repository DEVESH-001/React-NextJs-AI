import Note from "@/models/note";
import { NextResponse } from "next/server";

const { default: dbConnect } = require("@/lib/db");

export async function GET() {
  try {
    await dbConnect();
    const notes = await Note.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: notes }, { status: 201 });
  } catch (error) {
    console.log("Error Getting Notes", error);
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const note = await Note.create(body);
    return NextResponse.json({ success: true, data: note }, { status: 201 });
  } catch (error) {
    console.log("Error Creating Note", error);
  }
}

import { NextResponse } from "next/server";

const { default: dbConnect } = require("@/lib/db");
const { default: Note } = require("@/models/note");

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();
    const note = await Note.findById(id);
    if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.log("Error deleting notes", error);
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await dbConnect();

    const body = await request.json();
    const note = await Note.findByIdAndUpdate(
      id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true },
    );
    if (!note) {
      return NextResponse.json(
        { success: false, error: "Note not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ success: true, data: note });
  } catch (error) {
    console.log("Error deleting notes", error);
  }
}

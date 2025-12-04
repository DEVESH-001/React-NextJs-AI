import { NextResponse } from "next/server";

export const users = [
  {
    id: 1,
    name: "Devesh Yadav",
    email: "devesh@rao.com",
    age: 25,
  },
  {
    id: 2,
    name: "Neelesh Yadav",
    email: "neelesh@yadav.com",
    age: 30,
  },
  {
    id: 3,
    name: "Sher Yadav",
    email: "sher@yadav.com",
    age: 28,
  },
];

export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const name = searchParams.get("name");
    const age = searchParams.get("age");

    let filteredUsers = users;

    if (age) {
      filteredUsers = filteredUsers.filter((user) => user.age === Number(age));
    }

    if (name) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: filteredUsers,
      total: filteredUsers.length,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to get users",
      },
      { status: 500 }
    );
  }
}

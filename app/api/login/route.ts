import { NextResponse, NextRequest } from "next/server";
// import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  // Dummy password check (you can replace this with DB verification)
  if (password === "12345678") {
    const response = NextResponse.json({ message: "Login successful" });

    // Set session cookie
    response.cookies.set(
      "session",
      'login=true',
      { httpOnly: true, secure: true, path: "/" }
    );

    return response;
  }

  return NextResponse.json({ message: "Invalid password" }, { status: 401 });
}
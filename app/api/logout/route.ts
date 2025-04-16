// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect("/login"); // Redirect after logout

  // Destroy session cookie with matching settings
  response.cookies.set("session", "", {
    httpOnly: true,       // Same settings as login
    secure: true,         // Same as login
    path: "/",            // Must match login cookie path
    expires: new Date(0), // Expire the cookie immediately
    sameSite: "lax",
  });

  return response;
}

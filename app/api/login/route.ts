import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = String(body?.password ?? "");

    if (password !== "acn-song-2026") {
      return NextResponse.json({ success: false }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "auth",
      value: "acn-song-2026",
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.redirect("http://localhost:3000/login");
  }
}

// middleware를 적용할 페이지 로그인을 해야 접근할수있는 페이지
export const config = {
  matcher: ["/cart"],
};

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request:NextRequest){
//     const token = localStorage.getItem("accessToken");
//     if(!token){
//         if(request.nextUrl.pathname.startsWith('/cart')){
//             console.log('경로 리다이렉트 test')
//             return NextResponse.redirect(new URL('/main',request.url));
//         }
//     }
// }
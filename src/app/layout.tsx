import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLeftPc from "./_component/MainLeftPc";
import "./globals.css";
import Navigation from "./_component/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "windter-foodies",
  description: "겨울철 간식거리를 찾아보자!",
  icons: {
    // 파비콘 추가 사항
    // icon:
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="w-full h-full flex items-center justify-center gap-[30px]">
          {/* <MainLeftPc /> */}
          <div className="w-full border border-color-gray-10 shadow-md h-full max-w-[500px] px-8 relative pb-[150px]">
            {children}
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}

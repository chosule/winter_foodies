import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_component/Navigation";
import ReactQueryProvider from "./_component/ReactQueryProvider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "windter-foodies",
  description: "겨울철 간식거리를 찾아보자!",
  icons: {
    // 파비콘 추가 사항
    // icon:
  },
};

const gmarket = localFont({
  src: [
    {
      path: "../../public/font/GmarketSansLight.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/GmarketSansMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/GmarketSansBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-gmarket",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={gmarket.className}>
        <div className="w-full h-full flex items-center justify-center gap-[30px]">
          {/* <MainLeftPc /> */}
          <div className="w-full border border-color-gray-10 shadow-md h-full max-w-[500px] px-8 relative pb-[150px]">
            <ReactQueryProvider>{children}</ReactQueryProvider>
            <Navigation />
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./_component/Navigation";
import localFont from "next/font/local";
import AuthSession from "./_component/AuthSession";

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
        <AuthSession>
          <div className="w-full items-center justify-center gap-[30px] flex flex-col min-h-screen">
            <div className="flex-grow flex items-center justify-center w-full">
              <div className="w-full border border-color-gray-100 shadow-md h-screen max-w-[500px]  relative pb-[150px] bg-color-gray-10 overflow-y-scroll">
                {children}
              </div>
              <Navigation />
            </div>
          </div>
        </AuthSession>
      </body>
    </html>
  );
}

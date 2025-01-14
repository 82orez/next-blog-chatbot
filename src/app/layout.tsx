import type { Metadata } from "next";
import "./globals.css";

import { Noto_Sans_KR } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Noto_Sans_KR({
  weight: ["400", "600", "900"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog Chatbot",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <div className={"flex h-screen w-screen text-sm lg:text-base"}>
          <Sidebar />
          <div className="flex flex-1 flex-col lg:ml-64">
            <Header />
            <div className="flex flex-1 flex-col overflow-y-auto">
              <main className="flex flex-1 flex-col border-2 bg-gray-200">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

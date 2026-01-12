import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatbotTrigger from "@/components/ui/ChatbotTrigger";

export const metadata: Metadata = {
  title: "AI 연구소 - 인류를 위한 AI 연구",
  description: "인류의 이익을 위해 안전하고 유익한 AI 시스템을 개발하는 연구소입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ChatbotTrigger />
      </body>
    </html>
  );
}

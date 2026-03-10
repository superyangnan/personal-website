import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_SC, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "杨楠 · AI Product Builder",
  description: "懂边界、能落地的 AI 产品技术复合人才。985本科+港中深AI硕士，独立设计并上线 AI 心理产品 Rosebud。",
  openGraph: {
    title: "杨楠 · AI Product Builder",
    description: "懂边界、能落地的 AI 产品技术复合人才。985本科+港中深AI硕士，独立设计并上线 AI 心理产品 Rosebud。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${playfair.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen selection:bg-accent selection:text-primary bg-background text-foreground">
        <Navbar />
        <main className="flex flex-col min-h-screen pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

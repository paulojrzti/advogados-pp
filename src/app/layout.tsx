import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const canelaDeck = localFont({
  variable: "--font-canela-deck",
  src: [
    {
      path: "../fonts/canela-deck/CanelaDeck-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../canela-text-trial/CanelaDeck-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Site Institucional",
  description: "Site institucional",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${canelaDeck.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}

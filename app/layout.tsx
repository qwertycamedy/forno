import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/utils";

import { Header } from "@/components/shared";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Forno",
  description: "Pizza Forno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", inter.variable)}>
      <head>
        <link rel="image/svg" href="/icon.svg" sizes="32x32" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}

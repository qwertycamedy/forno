import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";

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
        <main className="flex flex-col flex-1">{children}</main>
      </body>
    </html>
  );
}

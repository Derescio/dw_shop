import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/styles/globals.css";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Shop DW",
  description: "Selling wide ranges of products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

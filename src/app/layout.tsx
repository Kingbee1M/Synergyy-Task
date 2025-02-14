import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "../Components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pearl Portal",
  description: "Create, Build and develope you new house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-1 grid-cols-5 min-h-screen mt-8`}
      >
        <Navigation className="col-span-2 flex justify-center items-center px-16" />
        <div className="col-span-4 ml-10">{children}</div>
      </body>
    </html>
  );
}

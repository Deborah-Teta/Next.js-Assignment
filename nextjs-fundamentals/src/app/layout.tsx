// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Fundamentals",
  description: "Assignment showcasing Next.js App Router and rendering strategies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen flex flex-col`}>
      
          <Header />
          <main className="grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        
      </body>
    </html>
  );
}
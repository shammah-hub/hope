'use client';

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Don't show navbar/footer on login and dashboard pages
  const isAuthPage = pathname === '/login';
  const isDashboardPage = pathname?.startsWith('/dashboard');
  const showNavAndFooter = !isAuthPage && !isDashboardPage;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {showNavAndFooter && <Navbar />}
        {children}
        {showNavAndFooter && <Footer />}
      </body>
    </html>
  );
}
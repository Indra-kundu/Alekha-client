import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from '../context/CartContext';
import toast, { Toaster } from 'react-hot-toast'; // এটি আগে npm install react-hot-toast দিয়ে ইন্সটল করে নেবেন
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alekha Adorn | Jewelry & Accessories",
  description: "Alekha Adorn premium jewelry collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* এখানে bg-background এবং text-text ক্লাসটি যোগ করা হয়েছে */}
      <body className="min-h-full flex flex-col bg-background text-text antialiased">
        <Toaster position="top-right" reverseOrder={false} />
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}
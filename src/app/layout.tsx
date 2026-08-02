import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import CustomerSidebar from "../components/customersidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "UV Snacks",
  description: "Order delicious food from UV Snacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
      <div className="flex min-h-screen">
        <CustomerSidebar />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}
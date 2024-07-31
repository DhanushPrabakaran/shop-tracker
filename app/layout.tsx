import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Tracker",
  description: "A web platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-MintGrotesk`}>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

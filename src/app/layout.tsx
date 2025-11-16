import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Max Lindquist",
  description: "Max Lindquist's Personal Webspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <VantaBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

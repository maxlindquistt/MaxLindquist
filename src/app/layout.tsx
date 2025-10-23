import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body className="bg-gray-50">
        <nav className="bg-white shadow-md p-6 mb-12">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {children}
        
        <footer className="bg-gray-800 text-white p-8 mt-12">
          <p className="text-center">Connect with me on GitHub</p>
        </footer>
      </body>
    </html>
  );
}

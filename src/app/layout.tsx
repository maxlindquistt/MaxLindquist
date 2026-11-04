import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/nav/DesktopNav";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const title = "Max Lindquist — Full-stack Developer";
const description =
  "Full-stack developer and Web Programming student at Linnaeus University in Kalmar, Sweden. Projects in React, Node.js, TypeScript and cloud infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL('https://maxlindquist.dev'),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Max Lindquist",
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {/* Without JS the Reveal observer never runs, so show its content immediately. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;translate:none!important}`}</style>
        </noscript>
        <DesktopNav />
        <Header />
        {children}
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}

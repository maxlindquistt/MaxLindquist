import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-950 shadow-md p-6 mb-12">
          <div className="max-w-6xl mx-auto flex gap-6">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
    );
}
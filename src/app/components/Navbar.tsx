import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-gray-950 shadow-md p-6 mb-12">
          <div className="max-w-6xl mx-auto flex">
            <div className="ml-0 gap-6 flex">
            <Link href="/" className="font-bold">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </div>
            <div className="ml-auto gap-6 flex">
                <Link href="https://github.com/maxlindquistt">
                <Image src="/github-mark-white.svg" alt="GitHub" width={30} height={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/maxlindquistt/">
                <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={30} height={30} />
                </Link>
            </div>
          </div>
        </nav>
    );
}
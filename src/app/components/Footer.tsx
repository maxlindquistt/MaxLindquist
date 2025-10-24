import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="p-6 mt-12 bg-[#1b5e1b] text-white text-center lg:text-lg">
            <div className="mb-4 flex justify-center gap-4">
                <p>Connect with me</p>
                <Link href="https://github.com/maxlindquistt" target="_blank" rel="noopener noreferrer" className="underline">
                    <Image src="/github-mark-white.svg" alt="GitHub" width={30} height={30} className="rounded-full" />
                </Link>
                <Link href="https://www.linkedin.com/in/maxlindquistt" target="_blank" rel="noopener noreferrer" className="underline">
                    <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={30} height={30} className="rounded-full" />
                </Link>
                <Link href="mailto:max.lindquist312@gmail.com" target="_blank" rel="noopener noreferrer" className="underline">
                    <Image src="/gmail-cutout-98x96.svg" alt="Gmail" width={30} height={30} className="rounded-full" />
                </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Max Lindquist. All rights reserved.</p>
        </footer>
    );
}

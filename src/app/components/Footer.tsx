import Image from "next/image";
import { focusRingOnDark } from "./styles";

const iconLinkClass = `inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/15 transition-colors ${focusRingOnDark}`;

export default function Footer() {
    return (
        <footer className="p-6 mt-12 mb-16 lg:mb-0 bg-[#1b5e1b] text-white text-center lg:text-lg">
            <div className="mb-4 flex justify-center items-center gap-2">
                <p className="mr-2">Connect with me</p>
                <a
                    href="https://github.com/maxlindquistt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Max Lindquist on GitHub (opens in a new tab)"
                    className={iconLinkClass}
                >
                    <Image src="/github-mark-white.svg" alt="" width={30} height={30} className="rounded-full" />
                </a>
                <a
                    href="https://www.linkedin.com/in/maxlindquistt"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Max Lindquist on LinkedIn (opens in a new tab)"
                    className={iconLinkClass}
                >
                    <Image src="/linkedin-svgrepo-com.svg" alt="" width={30} height={30} className="rounded-full" />
                </a>
                <a
                    href="mailto:max.lindquist312@gmail.com"
                    aria-label="Email Max Lindquist"
                    className={iconLinkClass}
                >
                    <Image src="/gmail-cutout-98x96.svg" alt="" width={30} height={30} className="rounded-full" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Max Lindquist. All rights reserved.</p>
        </footer>
    );
}

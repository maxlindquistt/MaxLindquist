'use client';

import Link from "next/link";
import { navLinks } from "./navLinks";
import { useActiveSection } from "./useActiveSection";
import { focusRing } from "../styles";

export default function DesktopNav() {
    const activeSection = useActiveSection();

    return (
        <nav
            aria-label="Primary"
            className="hidden lg:block sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm"
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="#top" className={`text-lg font-bold text-[#1b5e1b] rounded ${focusRing}`}>
                    Max Lindquist
                </Link>
                <ul className="flex items-center gap-2">
                    {navLinks.map(link => {
                        const isActive = activeSection === link.sectionId;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={isActive ? "location" : undefined}
                                    className={`relative block px-3 py-2 rounded font-medium transition-colors ${focusRing} after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:transition-colors ${
                                        isActive
                                            ? 'text-[#1b5e1b] after:bg-[#1b5e1b]'
                                            : 'text-gray-700 hover:text-[#1b5e1b] after:bg-transparent'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

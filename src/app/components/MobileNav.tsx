'use client';

import Link from "next/link";
import { navLinks } from "./nav/navLinks";
import { useActiveSection } from "./nav/useActiveSection";
import { focusRing } from "./styles";

export default function MobileNav() {
    const activeSection = useActiveSection();

    return (
        <nav aria-label="Primary" className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
            <ul className="flex justify-around items-center h-16">
                {navLinks.map(link => {
                    const isActive = activeSection === link.sectionId;
                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-current={isActive ? "location" : undefined}
                                className={`flex flex-col items-center gap-0.5 text-xs transition-colors px-4 py-2 rounded ${focusRing} ${
                                    isActive ? 'text-[#1b5e1b] font-semibold' : 'text-gray-500 hover:text-[#1b5e1b]'
                                }`}
                            >
                                {link.icon}
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

'use client';

import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";

const sectionIds = navLinks.map(link => link.sectionId);

/** id of the hero <header>. While it is on screen no nav item is active. */
const HERO_ID = "top";

/**
 * Tracks which page section is in the middle band of the viewport.
 * Returns "" while the hero is visible (and before any section has been reached).
 * Shared by MobileNav and DesktopNav so both highlight the same section.
 */
export function useActiveSection(ids: readonly string[] = sectionIds): string {
    const [activeSection, setActiveSection] = useState("");
    const [heroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        if (typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                }
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );

        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        const hero = document.getElementById(HERO_ID);
        const heroObserver = new IntersectionObserver(entries => {
            for (const entry of entries) setHeroVisible(entry.isIntersecting);
        });
        // The hero is rendered by the root layout, so it is always present.
        if (hero) heroObserver.observe(hero);

        return () => {
            observer.disconnect();
            heroObserver.disconnect();
        };
    }, [ids]);

    return heroVisible ? "" : activeSection;
}

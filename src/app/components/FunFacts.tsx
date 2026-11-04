'use client';

import { useEffect, useState } from "react";

const birthDate = new Date('2004-05-09T00:00:00Z');

function secondsSinceBirth() {
    return Math.floor((Date.now() - birthDate.getTime()) / 1000);
}

/**
 * Live "seconds since birth" counter. Renders a stable placeholder on the server
 * (the page is statically prerendered) and starts ticking after hydration, so the
 * server and first client render always match.
 */
function SecondsCounter() {
    const [seconds, setSeconds] = useState<number | null>(null);

    useEffect(() => {
        const tick = () => setSeconds(secondsSinceBirth());
        const first = setTimeout(tick, 0);
        // Respect reduced motion: show the real number once, but don't keep it ticking.
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const interval = reduceMotion ? undefined : setInterval(tick, 1000);
        return () => {
            clearTimeout(first);
            if (interval !== undefined) clearInterval(interval);
        };
    }, []);

    return (
        <span className="tabular-nums font-semibold text-[#1b5e1b]">
            {seconds === null ? "over 700 million" : seconds.toLocaleString("en-US")}
        </span>
    );
}

export default function FunFacts() {
    const funFacts: { emoji: string; text: React.ReactNode }[] = [
        { emoji: "🤸‍♂️", text: "I can do a backflip" },
        { emoji: "⏳", text: <>I was born <SecondsCounter /> seconds ago</> },
        { emoji: "🌴", text: "My middle name is Olof, after Olof Palme (maybe)" },
    ];

    return (
        <div className="h-full rounded-lg border border-green-100 bg-green-50/60 p-5 text-left">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">Fun facts</h3>
            <ul className="space-y-2 text-gray-700">
                {funFacts.map(({ emoji, text }) => (
                    <li key={emoji} className="flex gap-2">
                        <span aria-hidden="true">{emoji}</span>
                        <span>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

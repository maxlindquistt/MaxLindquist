'use client';

import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    className?: string;
}

/**
 * Types `text` out character by character.
 * - Screen readers get the full string at once (sr-only); the animation is aria-hidden.
 * - Under prefers-reduced-motion: reduce the full text is shown immediately and no timer runs.
 * - An invisible copy of the full text reserves the final size, so there is no layout shift.
 */
export default function Typewriter({ text, className = "" }: TypewriterProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let i = 0;
        const interval = setInterval(() => {
            i++;
            setCount(i);
            if (i >= text.length) clearInterval(interval);
        }, 35);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <p className={className}>
            <span className="sr-only">{text}</span>
            <span aria-hidden="true" className="grid">
                <span className="invisible col-start-1 row-start-1">{text}|</span>
                <span className="col-start-1 row-start-1 motion-reduce:hidden">
                    {text.slice(0, count)}
                    <span className="animate-pulse">|</span>
                </span>
                <span className="col-start-1 row-start-1 hidden motion-reduce:inline">{text}</span>
            </span>
        </p>
    );
}

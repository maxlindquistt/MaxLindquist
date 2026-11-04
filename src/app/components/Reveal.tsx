'use client';

import { useRef, useEffect, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'left' | 'right';
    delay?: number;
    className?: string;
}

// The hidden state only applies under `prefers-reduced-motion: no-preference`
// (motion-safe:), so reduced-motion users always get visible, untransformed content.
// The `reveal` class lets the <noscript> rule in layout.tsx show content without JS.
const hiddenClasses = {
    up: 'motion-safe:opacity-0 motion-safe:translate-y-10',
    left: 'motion-safe:opacity-0 motion-safe:-translate-x-10',
    right: 'motion-safe:opacity-0 motion-safe:translate-x-10',
} as const;

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Fail open: without IntersectionObserver, never leave content invisible.
        if (typeof IntersectionObserver === 'undefined') {
            const frame = requestAnimationFrame(() => setVisible(true));
            return () => cancelAnimationFrame(frame);
        }

        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            isDesktop
                ? { rootMargin: '0px 0px -5% 0px', threshold: 0 }
                : { rootMargin: '0px 0px -15% 0px', threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal transition-all duration-700 ease-out motion-reduce:transition-none ${
                visible ? 'opacity-100 translate-x-0 translate-y-0' : hiddenClasses[direction]
            } ${className}`}
        >
            {children}
        </div>
    );
}

'use client';

import { useRef, useEffect, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'left' | 'right';
    delay?: number;
    className?: string;
}

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -15% 0px', threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const hiddenTransform = {
        up: 'translate-y-10',
        left: '-translate-x-10',
        right: 'translate-x-10',
    }[direction];

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${hiddenTransform}`
                } ${className}`}
        >
            {children}
        </div>
    );
}

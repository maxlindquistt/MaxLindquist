'use client';

import Image from "next/image";
import Button from "./Button";
import { useEffect, useState } from "react";

const TAGLINE = "I build beautiful and reliable digital experiences.";

export default function Header() {
    const [displayed, setDisplayed] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            setDisplayed(TAGLINE.slice(0, i));
            if (i >= TAGLINE.length) clearInterval(interval);
        }, 35);
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="p-6 mb-12 flex flex-col items-center bg-white/20 shadow-md">
            <div className="flex items-center text-center gap-4">
                <h1 className="text-2xl font-bold lg:text-3xl">Hi, I&apos;m Max Lindquist</h1>
                <Image src="/waving-hand.svg" alt="Max Lindquist" width={30} height={30} />
            </div>
            <p className="my-2 text-center min-h-[1.5rem]">
                {displayed}
                <span className="animate-pulse">|</span>
            </p>
            <Button href="https://github.com/maxlindquistt" text="View My Work" image="/github-mark-white.svg" />
        </header>
    );
}

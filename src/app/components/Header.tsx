import Image from "next/image";
import Button from "./Button";
import SocialLinks from "./SocialLinks";
import Typewriter from "./Typewriter";

const TAGLINE = "I build beautiful and reliable digital experiences.";

export default function Header() {
    return (
        <header id="top" className="px-6 py-10 lg:py-16 mb-12 flex flex-col items-center text-center bg-white/20 shadow-md">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Hi, I&apos;m Max{" "}
                <span className="whitespace-nowrap">
                    Lindquist
                    <Image src="/waving-hand.svg" alt="" aria-hidden="true" width={30} height={30} className="inline-block ml-3 align-baseline" />
                </span>
            </h1>
            <p className="mt-2 font-semibold text-[#1b5e1b] lg:text-lg">
                Full-stack developer · Web Programming student at Linnaeus University
            </p>
            <Typewriter text={TAGLINE} className="mt-1 text-gray-800" />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Button href="#projects">View projects</Button>
                <Button href="#contact" variant="outline">Get in touch</Button>
                <SocialLinks />
            </div>
        </header>
    );
}

'use client';

import Image from "next/image";
import FunFacts from "./FunFacts";
import Hobbies from "./Hobbies";

export default function AboutSection() {
    return (
<section id="about" className="flex flex-col items-center px-6 lg:px-0 lg:grid lg:grid-cols-2 lg:items-center">
    <h2 className="text-3xl font-bold text-center mb-6 lg:col-span-2">About Me</h2>

    <Image
        src="/portrait.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
        className="rounded-full mb-6 lg:mb-0 lg:mx-auto lg:px-2 lg:row-start-2 lg:row-span-2 lg:rounded-4xl"
    />

    <div className="text-center mb-4 lg:mb-0 lg:text-left lg:text-lg lg:row-start-2 lg:col-start-2">
        <p className="mb-4">
            I&apos;m a passionate web developer with a knack for creating exceptional digital experiences.
        </p>
        <p className="mb-4">
            Currently I am studying Web Programming at Linnaeus University in Kalmar, Sweden.
        </p>
    </div>

    <p className="text-center mb-4 lg:mb-0 lg:text-left lg:text-lg lg:col-start-2 lg:row-start-3">
        On this site, you can explore my projects, what I&apos;ve been working on, what I&apos;m passionate about, and how to get in touch with me.
    </p>

    <div className="w-full flex flex-col items-center gap-4 text-center lg:col-span-2 lg:flex-row lg:items-start lg:justify-center lg:gap-8">
        <div className="w-full lg:w-1/2">
            <FunFacts />
        </div>
        <div className="w-full lg:w-1/2">
            <Hobbies />
        </div>
    </div>
</section>
    );
}
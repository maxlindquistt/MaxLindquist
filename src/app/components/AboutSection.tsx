'use client';

import Image from "next/image";
import FunFacts from "./FunFacts";
import Hobbies from "./Hobbies";

export default function AboutSection() {
    return (
        <section className="grid grid-cols-2 items-center ">

            <h2 className="text-2xl font-bold text-center mb-6 col-span-2">About Me</h2>
            <Image src="/about.jpg" alt="Profile Picture" width={150} height={150} className="rounded mx-auto" />
    
            <div className="max-w-[150px] mx-auto text-center lg:text-left lg:text-lg lg:max-w-none">
            <p className="mb-4">
                I&apos;m a passionate web developer with a knack for creating exceptional digital experiences.
            </p>

            <p className="mb-4">
                Currently I am studying Web Programming at Linnaeus University in Kalmar, Sweden.
            </p>
            </div>

            <FunFacts />

            <Hobbies />
            
        </section>
    );
}
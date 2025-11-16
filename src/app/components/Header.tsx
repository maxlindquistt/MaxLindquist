import Image from "next/image";
import Button from "./Button";

export default function Header() {
    return (
        <header className="p-6 mb-12 flex flex-col items-center bg-white/20 shadow-md">
            <div className="flex items-center text-center gap-4">
                <h1 className="text-2xl font-bold">Hi, I&apos;m Max Lindquist</h1>
                <Image src="/waving-hand.svg" alt="Max Lindquist" width={30} height={30} />
            </div>
            <p className="my-2 text-center">I build beautiful and reliable digital experiences.</p>

            <Button href="https://github.com/maxlindquistt" text="View My Work" image="/github-mark-white.svg" />
        </header>
    );
}
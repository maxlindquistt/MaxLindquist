import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
    href: string;
    text: string;
    image?: string;
}

export default function Button({ href, text, image }: ButtonProps) {
    return (
        <Link href={href} target="_blank" >
            <button className="inline-flex items-center px-4 py-2 bg-[#1b5e1b] text-white rounded hover:bg-green-700 transition-colors">
                {text}
                {image && <Image src={image} alt="#" width={20} height={20} className="inline-block ml-2 mt-auto mb-auto" />}
            </button>
        </Link>
    );
}

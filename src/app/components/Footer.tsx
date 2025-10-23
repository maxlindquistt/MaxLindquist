import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="flex items-center bg-gray-800 text-white p-8 mt-12">
          <div className="max-w-4xl mx-auto flex w-full">
            <p className="text-left">&copy; 2025 Max Lindquist</p>
            <div className="ml-auto flex space-x-4">
            <Link target="_blank" href="https://github.com/maxlindquistt">
                    <Image src="/github-mark-white.svg" alt="GitHub" width={30} height={30} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/maxlindquistt/">
                    <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={30} height={30} />
            </Link>
            </div>
          </div>
        </footer>
    );
}
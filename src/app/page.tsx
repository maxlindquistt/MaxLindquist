import Link from "next/link";

export default function HomePage() {
    return (
        <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div>
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Max Lindquist</h1>
            <p className="text-lg mb-2">
                I craft fast, scalable, and user-focused web applications using modern technologies like React, Next.js, Node.js, and TypeScript. <br /> <br />
                Explore my projects and get in touch to see how we can build something great together! <br />
            </p>
            <Link href="/projects" className="text-blue-200 text-lg hover:underline">View My Projects!</Link> <br />
            <Link href="/contact" className="text-blue-200 text-lg hover:underline">Contact Me!</Link>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">A Little About Me</h2>
            <p className="text-lg mb-2">
              I'm a full-stack developer with a passion for turning ideas into functional, elegant software. <br />
              From front-end interfaces that delight users to back-end systems that scale, I love solving complex problems through clean code and thoughtful design.
            </p>
            <Link href="/about" className="text-blue-200 text-lg hover:underline">See My Tech Stack And Learn More About Me!</Link>
          </div>
          
        </main>
    );
}
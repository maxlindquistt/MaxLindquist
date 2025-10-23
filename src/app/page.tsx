import Link from "next/link";
import TextCard from "./components/TextCard";

export default function HomePage() {
    return (
        <main className="text-center md:text-left mx-auto p-6 md:max-h-screen flex flex-wrap gap-6 justify-center">

          <div className="h-fit float-left">
            <TextCard>
              <h1 className="text-4xl font-bold mb-4">Hi, I'm Max Lindquist</h1>
              <p className="text-lg mb-2">
                  I craft fast, scalable, and user-focused web applications using modern technologies like React, Next.js, Node.js, and TypeScript.
              </p>
              <p className="text-lg mb-2">
                Explore my projects and get in touch to see how we can build something great together!
              </p>
            <Link href="/projects" className="text-blue-200 text-lg hover:underline">View My Projects!</Link> <br />
            <Link href="/contact" className="text-blue-200 text-lg hover:underline">Contact Me!</Link>
            </TextCard>
          </div>

          <div className="h-fit float-right md:mt-55">
            <TextCard>
              <h2 className="text-2xl font-bold mb-4">A Little About Me</h2>
              <p className="text-lg mb-2">
                I'm a full-stack developer with a passion for turning ideas into functional, elegant software.
              </p>
              <p className="text-lg mb-2">
                From front-end interfaces that delight users to back-end systems that scale, I love solving complex problems through clean code and thoughtful design.
              </p>
              <Link href="/about" className="text-blue-200 text-lg hover:underline">See My Tech Stack And Learn More About Me!</Link>
            </TextCard>
  
          </div>
          <div className="h-fit float-left md:-mt-20">
            <TextCard>
              <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
              <p className="text-lg mb-2">
                Whether you're interested in collaborating on a project, have a question about my work, or just want to say hi, I'd love to hear from you.
              </p>
              <p className="text-lg mb-2">
                Feel free to reach out via email or connect with me on LinkedIn or GitHub.
              </p>
              <Link href="/contact" className="text-blue-200 text-lg hover:underline">Get In Touch!</Link>
            </TextCard>
          </div>

          <div className="h-fit float-right md:mt-20">
            <TextCard>
              <h2 className="text-2xl font-bold mb-4">Currently Studying</h2>
              <p className="text-lg mb-2">
                As I'm currently studying Web Programming at Linnaeus University in Kalmar, Sweden, where I'm deepening my knowledge of web development and honing my skills, this site also serves as a platform to showcase what I've learned and the projects I've built along the way.
              </p>
            </TextCard>
          </div>
        </main>
    );
}
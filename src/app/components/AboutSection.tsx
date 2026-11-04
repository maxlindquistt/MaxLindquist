import Image from "next/image";
import FunFacts from "./FunFacts";
import Hobbies from "./Hobbies";

export default function AboutSection() {
    return (
        <section id="about" aria-labelledby="about-heading" className="p-6 my-12 bg-white border border-gray-100 shadow-md rounded-lg">
            <h2 id="about-heading" className="text-2xl font-bold mb-6">About me</h2>

            <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-10">
                <Image
                    src="/portrait.jpg"
                    alt="Portrait of Max Lindquist"
                    width={1346}
                    height={1757}
                    sizes="(min-width: 1024px) 240px, 176px"
                    className="h-44 w-44 flex-none rounded-full object-cover object-[50%_15%] lg:h-auto lg:w-60 lg:aspect-[3/4] lg:rounded-2xl lg:object-top"
                />

                <div className="max-w-prose space-y-4 text-gray-700 lg:text-lg">
                    <p>
                        I&apos;m Max, a Web Programming student at Linnaeus University in Kalmar, Sweden. I work across the full stack: React and TypeScript on the frontend, Node.js and Express on the backend, and Terraform, Ansible and Docker when it&apos;s time to deploy.
                    </p>
                    <p>
                        I care about code that&apos;s easy to read, easy to test and easy for the next person to change. I like keeping logic separate from the UI, writing tests alongside the code, and automating the repetitive parts, like setting up servers and deploying. I&apos;m looking for a team where I can keep learning from experienced developers while shipping real work.
                    </p>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <FunFacts />
                <Hobbies />
            </div>
        </section>
    );
}

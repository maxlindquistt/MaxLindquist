import TechStackCard from "./TechStackCard";

const frontendTechStack: string[] = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
];

const backendTechStack: string[] = [
    'Java',
    'Node.js',
    'Express',
    'MongoDB',
];

const otherTechStack: string[] = [
    'Git & GitHub',
    'RESTful APIs',
    'Docker',
];

const logosPairs: { [key: string]: string } = {
    'React': '/react-logo.svg',
    'Next.js': '/nextjs-logo.svg',
    'TypeScript': '/typescript-logo.svg',
    'JavaScript (ES6+)': '/javascript-logo.svg',
    'Tailwind CSS': '/tailwind-logo.svg',
    'HTML5': '/html5-logo.svg',
    'CSS3': '/css3-logo.svg',
    'Java': '/java-logo.svg',
    'Node.js': '/nodejs-logo.svg',
    'Express': '/express-logo.svg',
    'MongoDB': '/mongodb-logo.svg',
    'Git & GitHub': '/git-logo.svg',
    'RESTful APIs': '/rest-api-logo.svg',
    'Docker': '/docker-logo.svg',
}

export default function TechStackSection() {
    return (
        <section className="p-6">
            <h2 className="text-xl font-bold mb-4">Technologies I Have Used</h2>
            <p className="mb-4 font-bold">Frontend:</p>
            <div className="grid grid-cols-2 gap-4 mb-6 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center [&>*:last-child:nth-child(odd)]:max-w-[calc(50%-0.5rem)]">
                {frontendTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
            <p className="mb-4 font-bold">Backend:</p>
            <div className="grid grid-cols-2 gap-4 mb-6 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center [&>*:last-child:nth-child(odd)]:max-w-[calc(50%-0.5rem)]">
                {backendTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
            <p className="mb-4 font-bold">Other:</p>
            <div className="grid grid-cols-2 gap-4 mb-6 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center [&>*:last-child:nth-child(odd)]:max-w-[calc(50%-0.5rem)]">
                {otherTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
        </section>
    );
}

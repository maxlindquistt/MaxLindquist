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

export default function TechStack() {
    return (
        <div>
            <h4 className="text-2xl font-semibold mb-2">Frontend</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {frontendTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
            <h4 className="text-2xl font-semibold mb-2">Backend</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {backendTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
            <h4 className="text-2xl font-semibold mb-2">Other</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {otherTechStack.map((tech) => (
                    <TechStackCard key={tech} tech={tech} logo={logosPairs[tech]} />
                ))}
            </div>
        </div>
    );
}
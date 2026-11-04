import Image from "next/image";
import Reveal from "./Reveal";

const frontendTechStack: string[] = [
    'React',
    'Flutter',
    'Next.js',
    'TypeScript',
    'JavaScript (ES6+)',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Vite',
];

const backendTechStack: string[] = [
    'Java',
    'Go',
    'Python',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
];

const otherTechStack: string[] = [
    'Git & GitHub',
    'RESTful APIs',
    'Docker',
    'Terraform',
    'Ansible',
    'OpenStack',
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
    'Terraform': '/terraform-logo.svg',
    'Ansible': '/ansible-logo.svg',
    'Flutter': '/flutter-logo.svg',
    'Go': '/go-logo.svg',
    'Python': '/python-logo.svg',
    'Vite': '/vite-logo.svg',
    'PostgreSQL': '/postgresql-logo.svg',
    'OpenStack': '/openstack-logo.svg',
}

const techGroups: { id: string; label: string; items: string[] }[] = [
    { id: 'frontend', label: 'Frontend', items: frontendTechStack },
    { id: 'backend', label: 'Backend', items: backendTechStack },
    { id: 'tools-devops', label: 'Tools & DevOps', items: otherTechStack },
];

function TechChip({ tech }: { tech: string }) {
    const logo = logosPairs[tech];
    return (
        <li className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-800">
            {/* Decorative: the name is right next to it. */}
            {logo && <Image src={logo} alt="" width={20} height={20} className="h-5 w-5 object-contain" />}
            <span>{tech}</span>
        </li>
    );
}

export default function TechStackSection() {
    return (
        <section id="tech" aria-labelledby="tech-heading" className="p-6 my-12 bg-white border border-gray-100 shadow-md rounded-lg">
            <Reveal direction="left"><h2 id="tech-heading" className="text-2xl font-bold mb-6">Technologies I&apos;ve used</h2></Reveal>
            <Reveal direction="up" delay={150}>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
                    {techGroups.map(({ id, label, items }) => {
                        const headingId = `tech-${id}`;
                        return (
                            <div key={id}>
                                <h3 id={headingId} className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#1b5e1b]">{label}</h3>
                                <ul aria-labelledby={headingId} className="flex flex-wrap gap-2">
                                    {items.map((tech) => (
                                        <TechChip key={tech} tech={tech} />
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </Reveal>
        </section>
    );
}

import Image from "next/image";
import type { Project } from "../data/projects";
import Button from "./Button";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

/** Tech chips shown per card. Order `tech` in projects.ts so the most important come first. */
const MAX_TECH_CHIPS = 5;

/** Logos in /public used for the fallback header when a project has no screenshot. */
const techLogos: Record<string, string> = {
    "React": "/react-logo.svg",
    "Node.js": "/nodejs-logo.svg",
    "Express": "/express-logo.svg",
    "Tailwind CSS": "/tailwind-logo.svg",
    "TypeScript": "/typescript-logo.svg",
    "JavaScript": "/javascript-logo.svg",
    "HTML5": "/html5-logo.svg",
    "CSS3": "/css3-logo.svg",
    "Python": "/python-logo.svg",
    "Terraform": "/terraform-logo.svg",
    "Ansible": "/ansible-logo.svg",
    "Docker": "/docker-logo.svg",
    "MongoDB": "/mongodb-logo.svg",
};

function ProjectMedia({ project }: { project: Project }) {
    if (project.image) {
        return (
            <Image
                src={project.image}
                alt={`Screenshot of the ${project.title} website`}
                width={1280}
                height={800}
                sizes="(min-width: 1152px) 528px, (min-width: 1024px) 45vw, 100vw"
                className="aspect-[16/10] w-full h-auto object-cover object-top border-b border-gray-100"
            />
        );
    }

    // Only logos for techs that are also shown as chips, so the header matches the card.
    const logos = project.tech.slice(0, MAX_TECH_CHIPS).filter(tech => techLogos[tech]).slice(0, 4);

    // Decorative: the title and tech chips below carry the same information.
    return (
        <div
            aria-hidden="true"
            className="aspect-[16/10] w-full flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-green-50 to-green-100 border-b border-green-100"
        >
            <div className="flex items-center gap-3 sm:gap-4">
                {logos.map(tech => (
                    <span key={tech} className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white shadow-sm">
                        <Image src={techLogos[tech]} alt="" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const headingId = `project-${project.slug}`;

    return (
        <article
            aria-labelledby={headingId}
            className="h-full flex flex-col overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        >
            <ProjectMedia project={project} />

            <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1b5e1b]">{project.context}</p>
                <h3 id={headingId} className="mt-1 text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.summary}</p>

                <h4 className="mt-4 text-sm font-semibold text-gray-900">What I built</h4>
                <ul className="mt-1 space-y-1 text-sm text-gray-700">
                    {project.highlights.map(item => (
                        <li key={item} className="flex gap-2">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#1b5e1b]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <h4 className="sr-only">Tech stack</h4>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, MAX_TECH_CHIPS).map(tech => (
                        <li key={tech} className="rounded-full bg-green-50 border border-green-200 px-2.5 py-0.5 text-xs font-medium text-[#1b5e1b]">
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.liveUrl && (
                        <Button href={project.liveUrl} icon={<ExternalLinkIcon />}>
                            Visit live site<span className="sr-only">: {project.title}</span>
                        </Button>
                    )}
                    {project.repoUrls.map(repo => (
                        <Button
                            key={repo.url}
                            href={repo.url}
                            variant="outline"
                            icon={<GitHubIcon className="w-4 h-4" />}
                        >
                            {repo.label}<span className="sr-only">: {project.title}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </article>
    );
}

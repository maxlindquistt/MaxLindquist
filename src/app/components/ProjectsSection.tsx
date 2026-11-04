import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import { GITHUB_URL } from "./SocialLinks";
import { focusRing } from "./styles";

export default function ProjectsSection() {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="p-6 my-12 bg-white border border-gray-100 shadow-md rounded-lg">
            <Reveal direction="left"><h2 id="projects-heading" className="text-2xl font-bold mb-2">Featured projects</h2></Reveal>
            <Reveal direction="left" delay={100}>
                <p className="mb-6 text-gray-700">A few things I&apos;ve built, from a live client website to cloud infrastructure.</p>
            </Reveal>

            <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <li key={project.slug}>
                        <Reveal direction="up" delay={(index % 2) * 100} className="h-full">
                            <ProjectCard project={project} />
                        </Reveal>
                    </li>
                ))}
            </ul>

            <p className="mt-6 text-center">
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 rounded px-1 font-semibold text-[#1b5e1b] underline underline-offset-4 hover:text-green-700 ${focusRing}`}
                >
                    More projects on GitHub <span aria-hidden="true">→</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                </a>
            </p>
        </section>
    );
}

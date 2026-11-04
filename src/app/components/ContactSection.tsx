import CopyEmailButton from "./CopyEmailButton";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL } from "./SocialLinks";
import { focusRing } from "./styles";

const EMAIL = "max.lindquist312@gmail.com";

const linkClass = `inline-flex min-h-11 items-center gap-2 rounded px-2 py-2.5 font-medium text-[#1b5e1b] underline-offset-4 hover:underline hover:text-green-700 ${focusRing}`;

const primaryClass = `inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-md border-2 border-[#1b5e1b] bg-[#1b5e1b] px-4 py-2 font-medium text-white transition-colors hover:border-green-800 hover:bg-green-800 ${focusRing}`;

export default function ContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-heading" className="p-6 my-12 bg-white border border-gray-100 shadow-md rounded-lg text-center">
            <Reveal direction="left">
                <h2 id="contact-heading" className="text-2xl font-bold mb-4">Let&apos;s work together</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
                <p className="mb-4">Hiring for a developer role, or want to talk about one of my projects? Email is the quickest way to reach me.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <a href={`mailto:${EMAIL}`} className={primaryClass}>
                        <MailIcon className="h-5 w-5 flex-none" />
                        <span className="break-all">{EMAIL}</span>
                    </a>
                    <CopyEmailButton email={EMAIL} />
                </div>
                <ul className="mt-3 flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-1">
                    <li>
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <LinkedInIcon />
                            LinkedIn
                            <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                    <li>
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <GitHubIcon />
                            GitHub
                            <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">Based in Kalmar, Sweden</p>
            </Reveal>
        </section>
    );
}

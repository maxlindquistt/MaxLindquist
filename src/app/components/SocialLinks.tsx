import { GitHubIcon, LinkedInIcon } from "./icons";
import { focusRing, focusRingOnDark } from "./styles";

export const GITHUB_URL = "https://github.com/maxlindquistt";
export const LINKEDIN_URL = "https://www.linkedin.com/in/maxlindquistt";

interface SocialLinksProps {
    /** "light" = green icons for light backgrounds, "dark" = white icons for the green footer. */
    tone?: "light" | "dark";
    className?: string;
}

/** Icon-only GitHub/LinkedIn links. Each link carries its own accessible name. */
export default function SocialLinks({ tone = "light", className = "" }: SocialLinksProps) {
    const linkClass =
        tone === "light"
            ? `text-[#1b5e1b] hover:text-green-700 hover:bg-green-50 ${focusRing}`
            : `text-white hover:bg-white/15 ${focusRingOnDark}`;

    const links = [
        { href: GITHUB_URL, label: "Max Lindquist on GitHub", Icon: GitHubIcon },
        { href: LINKEDIN_URL, label: "Max Lindquist on LinkedIn", Icon: LinkedInIcon },
    ];

    return (
        <ul className={`flex items-center gap-2 ${className}`}>
            {links.map(({ href, label, Icon }) => (
                <li key={href}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} (opens in a new tab)`}
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors ${linkClass}`}
                    >
                        <Icon className="w-6 h-6" />
                    </a>
                </li>
            ))}
        </ul>
    );
}

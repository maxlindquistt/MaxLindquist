export interface ProjectLink {
    label: string;
    url: string;
}

export interface Project {
    title: string;
    slug: string;
    /** Short context line, e.g. project type · client/school. */
    context: string;
    /** One-sentence summary. */
    summary: string;
    /** 2-3 short points about what Max built. */
    highlights: string[];
    /** Most important first: cards show only the first 5. */
    tech: string[];
    liveUrl?: string;
    repoUrls: ProjectLink[];
    /** Path under /public. 1280x800 screenshot. */
    image?: string;
}

// Copy is based on each repository's README, GitHub description, package.json and source.
// Keep it factual: no invented features, metrics or users.
export const projects: Project[] = [
    {
        title: "Vimmerby Diamantverktyg",
        slug: "vimmerby-diamantverktyg",
        context: "Client project · Live in production",
        summary:
            "A multi-page business website for Vimmerby Diamantverktyg, a company specialising in diamond tools, live in production at diamantverktyg.com.",
        highlights: [
            "Server-rendered pages with Node.js, Express 5 and EJS templates",
            "Reusable vanilla JavaScript Web Components for the navigation, hero section and buttons",
            "Contact form that sends email via Nodemailer, plus a custom 404 page",
        ],
        tech: ["Node.js", "Express", "EJS", "JavaScript", "Web Components", "HTML5", "CSS3", "Nodemailer"],
        liveUrl: "https://www.diamantverktyg.com/",
        repoUrls: [{ label: "Code", url: "https://github.com/maxlindquistt/VimmerbyDiamantverktyg" }],
        image: "/projects/diamantverktyg.png",
    },
    {
        title: "IoT Dashboard",
        slug: "iot-dashboard",
        context: "Full-stack · Linnaeus University",
        summary:
            "A full-stack IoT app that shows live temperature and humidity readings from a sensor and lets you switch an LED on the device on and off.",
        highlights: [
            "Express backend that subscribes to an MQTT broker, stores readings in SQLite and pushes them to the browser with Socket.IO",
            "React dashboard with a live Recharts graph of the sensor history",
            "REST endpoints for reading history and for sending LED commands over MQTT",
        ],
        tech: ["React", "Node.js", "Express", "Socket.IO", "MQTT", "SQLite", "Recharts", "Tailwind CSS", "Vite"],
        repoUrls: [
            { label: "Frontend code", url: "https://github.com/maxlindquistt/iot-dashboard" },
            { label: "Backend code", url: "https://github.com/maxlindquistt/iot-backend" },
        ],
    },
    {
        title: "Cipher App + Cipher Module",
        slug: "cipher",
        context: "Library + web app · Linnaeus University",
        summary:
            "A TypeScript library for the Caesar, Vigenère and Atbash ciphers, plus a React web app that uses it to encode and decode text in real time.",
        highlights: [
            "Standalone cipher module in TypeScript, kept separate from the UI",
            "Live output as you type with an encode/decode toggle, preserving case, numbers and punctuation",
            "102 unit tests run with Deno, written with Clean Code principles in mind",
        ],
        tech: ["TypeScript", "React", "Deno", "Vite", "CSS"],
        liveUrl: "https://cipher.maxlindquist.dev/",
        repoUrls: [
            { label: "App code", url: "https://github.com/maxlindquistt/Cipher-App" },
            { label: "Module code", url: "https://github.com/maxlindquistt/Cipher-Module" },
        ],
        image: "/projects/cipher.png",
    },
    {
        title: "Cloud Infrastructure as Code",
        slug: "cloud-infrastructure",
        context: "DevOps · Linnaeus University",
        summary:
            "Terraform and Ansible code that provisions and configures a two-server web application on an OpenStack cloud with a single deploy script.",
        highlights: [
            "Terraform provisions separate web app and database instances, networking and a floating IP on OpenStack",
            "Ansible configures a Python Flask web app and its PostgreSQL database server",
            "One deploy.sh script runs the whole provisioning and configuration",
        ],
        tech: ["Terraform", "Ansible", "OpenStack", "Python", "PostgreSQL", "Flask"],
        repoUrls: [
            { label: "Code", url: "https://github.com/maxlindquistt/2dv013-Assignment1-Infrastructure" },
        ],
    },
];

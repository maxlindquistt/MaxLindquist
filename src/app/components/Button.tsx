import type { ReactNode } from "react";
import { focusRing } from "./styles";

interface ButtonProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "outline";
    /** Opens in a new tab with rel="noopener noreferrer". Defaults to true for http(s) URLs. */
    external?: boolean;
    /** Decorative icon rendered after the label. */
    icon?: ReactNode;
    className?: string;
}

const variants = {
    primary: "bg-[#1b5e1b] text-white border-[#1b5e1b] hover:bg-green-700 hover:border-green-700",
    outline: "bg-white/80 text-[#1b5e1b] border-[#1b5e1b] hover:bg-green-50",
} as const;

/** A link styled as a button. Renders a single interactive element (no nested <button>). */
export default function Button({ href, children, variant = "primary", external, icon, className = "" }: ButtonProps) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    const classes = `inline-flex items-center justify-center gap-2 min-h-11 px-4 py-2 rounded border-2 font-medium transition-colors ${variants[variant]} ${focusRing} ${className}`;

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {children}
                {icon}
                <span className="sr-only"> (opens in a new tab)</span>
            </a>
        );
    }

    return (
        <a href={href} className={classes}>
            {children}
            {icon}
        </a>
    );
}

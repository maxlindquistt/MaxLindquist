'use client';

import { useEffect, useRef, useState } from "react";
import { focusRing } from "./styles";

type CopyState = "idle" | "copied" | "failed";

const RESET_MS = 2000;

/** Copies an email address to the clipboard and announces the result politely. */
export default function CopyEmailButton({ email }: { email: string }) {
    const [state, setState] = useState<CopyState>("idle");
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    async function handleCopy() {
        let next: CopyState = "failed";
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(email);
                next = "copied";
            }
        } catch {
            // Permission denied or insecure context: fall through to the "failed" message.
        }
        setState(next);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setState("idle"), RESET_MS);
    }

    const label = state === "copied" ? "Copied!" : state === "failed" ? "Copy failed" : "Copy";

    return (
        <>
            <button
                type="button"
                onClick={handleCopy}
                aria-label="Copy email address"
                className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-md border-2 border-[#1b5e1b] bg-white px-4 py-2 font-medium text-[#1b5e1b] transition-colors hover:bg-green-50 ${focusRing}`}
            >
                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="h-5 w-5">
                    {state === "copied" ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.5-3.375-8.25-7.5-8.25H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25" />
                    )}
                </svg>
                <span aria-hidden="true">{label}</span>
            </button>
            <span aria-live="polite" role="status" className="sr-only">
                {state === "copied" ? "Email address copied to clipboard" : state === "failed" ? `Couldn't copy. The email address is ${email}` : ""}
            </span>
        </>
    );
}

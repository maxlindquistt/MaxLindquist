'use client';

import RepoCard from "./RepoCard";
import { useRef } from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  created_at: string;
  homepage: string | null;
};

export default function ProjectsSection({ repos }: { repos: Repo[] }) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350; // Adjust based on card width + gap
            const newScrollPosition = direction === 'left' 
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="p-6 my-12 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">Projects</h2>
            <p className="mb-4">Here are some of my recent projects.</p>
            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white shadow-lg rounded-full p-3 transition-colors"
                    aria-label="Scroll left"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div 
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto pb-4 lg:[&::-webkit-scrollbar]:hidden lg:[-ms-overflow-style:none] lg:[scrollbar-width:none]"
                >
                    {repos.map(repo => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white shadow-lg rounded-full p-3 transition-colors"
                    aria-label="Scroll right"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

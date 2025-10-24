'use client';

import { useState } from "react";

const birthDate = new Date('2004-05-09T00:00:00Z');
const now = new Date();
const seconds = Math.floor((now.getTime() - birthDate.getTime()) / 1000);

export default function FunFacts() {
    const [showFunFacts, setShowFunFacts] = useState(false);

    const funFacts = [
        "🤸‍♂️ I can do a backflip",
        "⏳ I was born " + seconds + " seconds ago",
        "🌴 My middle name is Olof, after Olof Palme (Maybe)",
    ];

    return (
        <>
            <button 
                onClick={() => setShowFunFacts(!showFunFacts)}
                className="bg-[#1b5e1b] col-span-2 text-white mx-auto mt-8 px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
                {showFunFacts ? "Hide Fun Facts" : "Show Fun Facts"}
            </button>

            <div 
                className={`col-span-2 overflow-hidden transition-all duration-300 ease-in-out ${
                    showFunFacts ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="p-4 rounded bg-[#1b5e1b] text-white">
                    <ul className="space-y-2 text-sm md:text-base lg:text-lg">
                        {funFacts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

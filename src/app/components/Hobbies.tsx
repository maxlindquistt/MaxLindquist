import { useState } from "react";

export default function Hobbies() {
    const [showHobbies, setShowHobbies] = useState(false);

    const hobbies = [
        "🥋 Training mixed martial arts",
        "🎮 Playing video games",
        "👫 Hanging out with friends",
    ];

    return (
        <>
            <button 
                onClick={() => setShowHobbies(!showHobbies)}
                className="bg-[#1b5e1b] col-span-2 text-white mx-auto mt-8 px-4 py-2 rounded hover:bg-green-700 transition-colors 2xl:col-span-1 2xl:row-start-3"
            >
                {showHobbies ? "Hide Hobbies" : "Show Hobbies"}
            </button>

            <div 
                className={`col-span-2 overflow-hidden transition-all duration-300 ease-in-out 2xl:col-span-1 2xl:row-start-4 2xl:w-lg 2xl:mx-auto ${
                    showHobbies ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="p-4 rounded bg-[#1b5e1b] text-white text-left">
                    <ul className="space-y-2 text-sm md:text-base lg:text-lg">
                        {hobbies.map((hobby, index) => (
                            <li key={index}>{hobby}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

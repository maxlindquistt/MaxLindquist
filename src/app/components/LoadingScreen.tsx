'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            className={`fixed flex flex-col z-50 items-center justify-center opacity-0 pointer-events-none bg-white transition-opacity duration-700 top-0 left-0 right-0 bottom-0 w-full h-full ${
                isLoaded ? 'lg:opacity-0 pointer-events-none' : 'lg:opacity-100'
            }`}
            >
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    </div>
                </div>
                <p className='mt-8 text-gray-700'>Loading...</p>
            </div>
    );
}
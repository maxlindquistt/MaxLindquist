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
            className={`fixed flex flex-col z-50 items-center justify-center bg-white transition-opacity duration-700 -top-[200px] -left-[200px] -right-[200px] -bottom-[200px] w-[calc(100%+400px)] h-[calc(100%+400px)] lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:w-full lg:h-full ${
                isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`} style={
                {
                    minHeight: '100dvh'
                }
            }
            >
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    </div>
                </div>
                <p className='mt-8 text-gray-700'>Loading...</p>
            </div>
    );
}
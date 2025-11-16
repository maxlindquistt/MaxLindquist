'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
    destroy: () => void;
}

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            // Dynamically import to avoid SSR issues
            // @ts-expect-error no types available
            import('vanta/dist/vanta.clouds.min').then((VANTA) => {
                import('three').then((THREE) => {
                    setVantaEffect(
                        VANTA.default({
                            el: vantaRef.current,
                            THREE: THREE,
                            mouseControls: true,
                            touchControls: false,
                            gyroControls: false,
                            minHeight: 200.00,
                            minWidth: 200.00
                        })
                    );
                    // Mark as loaded after a short delay to ensure rendering started
                    setTimeout(() => setIsLoaded(true), 500);
                });
            });
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <div 
                ref={vantaRef} 
                className="fixed -z-10 -top-[1400px] -left-[200px] -right-[200px] -bottom-[200px] width-[calc(100%+400px)] height-[calc(100%+1600px)] lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:width-full lg:height-full"
            />
            
            {/* Loading Screen */}
            <div 
                className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
                    isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-black text-lg font-medium">Loading...</p>
                </div>
            </div>
        </>
    );
}

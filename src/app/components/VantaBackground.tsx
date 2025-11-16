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
                            touchControls: true,
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
                className="fixed inset-0 -z-10 w-screen h-screen"
                style={{ minHeight: '100dvh' }}
            />
            
            {/* Loading Screen */}
            <div 
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-700 w-screen ${
                    isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{ minHeight: '100dvh' }}
            >
                <div className="flex-col gap-4 w-full flex items-center justify-center">
                    <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    </div>
                </div>
                <p className='mt-8 text-gray-700'>Loading...</p>
            </div>
        </>
    );
}
'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
    destroy: () => void;
}

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // Lock a stable viewport height in px to avoid iOS URL bar vh shifts
    const [stableVH, setStableVH] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

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

    // Compute a stable viewport height (once), update only on large changes/orientation
    useEffect(() => {
        const current = () => (window.visualViewport?.height ?? window.innerHeight);
        const setInitial = () => setStableVH(Math.round(current()));
        setInitial();

        const onResize = () => {
            const h = Math.round(current());
            // Only accept big changes (likely orientation change), ignore tiny URL bar jitters
            if (stableVH === null || Math.abs(h - stableVH) > 200) {
                setStableVH(h);
            }
        };

        window.addEventListener('orientationchange', onResize);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('orientationchange', onResize);
            window.removeEventListener('resize', onResize);
        };
    }, [stableVH]);

    return (
        <>
            <div 
                ref={vantaRef} 
                className="fixed -z-10"
                style={{
                    top: isMobile ? -1400 : 0,
                    left: isMobile ? -200 : 0,
                    right: isMobile ? -200 : 0,
                    bottom: isMobile ? -200 : 0,
                    height: isMobile 
                        ? (stableVH !== null ? stableVH + 1600 : 2800) + 'px'
                        : '100%'
                }}
            />
            
            {/* Loading Screen */}
            <div 
            className={`fixed flex flex-col z-50 items-center justify-center bg-white transition-opacity duration-700 -top-[200px] -left-[200px] -right-[200px] -bottom-[200px] w-[calc(100%+400px)] h-[calc(100%+400px)] lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:w-full lg:h-full ${
                isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
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

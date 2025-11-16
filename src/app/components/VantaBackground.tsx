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
                    // Add a buffer around all sides and lock height to a stable px value
                    top: -200,
                    left: -200,
                    right: -200,
                    // height uses stableVH + buffer; fallback to 1000px buffer if null during first paint
                    height: (stableVH !== null ? stableVH + 400 : (typeof window !== 'undefined' ? window.innerHeight + 400 : 1200)) + 'px'
                }}
            />
            
            {/* Loading Screen */}
            <div 
                className={`fixed z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
                    isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                style={{
                    top: -200,
                    left: -200,
                    right: -200,
                    height: (stableVH !== null ? stableVH + 400 : (typeof window !== 'undefined' ? window.innerHeight + 400 : 1200)) + 'px'
                }}
            >
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-black text-lg font-medium">Loading...</p>
                </div>
            </div>
        </>
    );
}

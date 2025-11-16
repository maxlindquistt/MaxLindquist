'use client';

import { useEffect, useRef, useState } from 'react';

interface VantaEffect {
    destroy: () => void;
}

export default function VantaBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

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
                className="hidden -z-10 lg:fixed lg:block lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:w-full lg:h-full"
            />
        </>
    );
}

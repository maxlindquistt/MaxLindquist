declare module 'vanta/dist/vanta.clouds.min' {
  export default function VANTA(options: {
    el: HTMLElement | null;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    speed?: number;
    [key: string]: any;
  }): {
    destroy: () => void;
    [key: string]: any;
  };
}

declare module 'vanta/dist/vanta.birds.min' {
  export default function VANTA(options: {
    el: HTMLElement | null;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    color1?: number;
    color2?: number;
    quantity?: number;
    [key: string]: any;
  }): {
    destroy: () => void;
    [key: string]: any;
  };
}

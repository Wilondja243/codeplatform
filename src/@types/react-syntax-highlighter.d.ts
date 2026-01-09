declare module 'react-syntax-highlighter' {
    import { ComponentType } from 'react';
    export const Prism: ComponentType<any>;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism' {
    export const tomorrow: any;
    export const coy: any;
    export const okaidia: any;
    export const solarizedlight: any;
    export const tomorrowNight: any;
    // tu peux ajouter d'autres thèmes si besoin
}

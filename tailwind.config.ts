import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            xs: '450px',
            sm: '768px',
            md: '1024px',
            lg: '1280px',
            xl: '1600px',
        },
        extend: {
            fontFamily: {
                inter: 'Inter',
                clash: 'Clash Grotesk',
            },
            flexGrow: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
            },
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                success: 'var(--success)',
                orange: 'var(--orange)',
                danger: 'var(--danger)',
                outline: 'var(--outline)',
                dark: 'var(--dark)',
                lightgray: 'var(--lightgray)',

                'effects-blue': 'var(--effects-blue)',
                'effects-green': 'var(--effects-green)',
                'effects-pink': 'var(--effects-pink)',

                blueline: 'var(--blueline)',
                secondaryline: 'var(--secondaryline)',
                pinkline: 'var(--pinkline)',

                link: 'var(--link)',
                'link-visited': 'var(--link-visited)',
                'content-secondary': 'var(--content-secondary)',
                'content-colorful': 'var(--content-colorful)',

                icon: 'var(--icon)',
                'icon-orange': 'var(--icon-orange)',
                'icon-colorful': 'var(--icon-colorful)',
                'icon-secondary': 'var(--icon-secondary)',

                surface: 'var(--surface)',
                'surface-dark': 'var(--surface-dark)',

                'state-hover': 'var(--state-hover)',
                'state-pressed': 'var(--state-pressed)',
                'state-disabled': 'var(--state-disabled)',
                'state-overlay': 'var(--state-overlay)',

                'state-primary-hover': 'var(--state-primary-hover)',
                'state-primary-pressed': 'var(--state-primary-pressed)',
                'state-primary-disabled': 'var(--state-primary-disabled)',

                'state-secondary-hover': 'var(--state-secondary-hover)',
                'state-secondary-pressed': 'var(--state-secondary-pressed)',
                'state-secondary-disabled': 'var(--state-secondary-disabled)',
            },
            borderRadius: {
                xs: '4px',
                ms: '6px',
            },
            zIndex: {
                60: '60',
                70: '70',
                80: '80',
                90: '90',
            },
        },
    },
    plugins: [
        function ({ addVariant }: any) {
            addVariant('child', '& > *');
        },
    ],
} satisfies Config;

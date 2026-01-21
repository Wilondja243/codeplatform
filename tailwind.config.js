/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                'lg-nav': '950px',
            },
            colors: {
                primary: 'var(--primary)',
                'primary-light': 'var(--primary-light)',
                'primary-dark': 'var(--primary-dark)',
                blue: 'var(--blue)',

                background: {
                    light: 'var(--background-light)',
                    muted: 'var(--background-muted)',
                    dark: 'var(--background-dark)',
                },

                card: {
                    light: 'var(--card-light)',
                    'light-hover': 'var(--card-light-hover)',
                    'light-border': 'var(--card-light-border)',
                    dark: 'var(--card-dark)',
                    'dark-hover': 'var(--card-dark-hover)',
                    'dark-border': 'var(--card-dark-border)',
                },

                text: {
                    light: 'var(--text-light)',
                    dark: 'var(--text-dark)',
                    primary: 'var(--text-primary)',
                    muted: 'var(--text-muted)',
                    'dark-alt': 'var(--text-dark-alt)',
                },

                border: 'var(--border)',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
        },
    },
    plugins: [],
};

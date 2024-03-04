/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                nav: {
                    50: 'oklch(97.50% 0.01 255.47)',
                    100: 'oklch(94.73% 0.01 256.70)',
                    200: 'oklch(88.78% 0.02 246.06)',
                    300: 'oklch(78.93% 0.05 245.24)',
                    400: 'oklch(67.03% 0.07 246.33)',
                    500: 'oklch(57.48% 0.08 247.88)',
                    600: 'oklch(49.22% 0.08 250.26)',
                    700: 'oklch(42.36% 0.07 252.47)',
                    800: 'oklch(38.54% 0.05 249.34)',
                    900: 'oklch(34.71% 0.05 253.91)',
                    950: 'oklch(24.88% 0.03 255.23)',
                },
                page: {
                    50: 'oklch(97.59% 0.00 264.54)',
                    100: 'oklch(94.83% 0.01 260.73)',
                    200: 'oklch(88.60% 0.02 257.20)',
                    300: 'oklch(78.62% 0.03 252.99)',
                    400: 'oklch(66.52% 0.05 252.78)',
                    500: 'oklch(57.03% 0.05 251.53)',
                    600: 'oklch(48.69% 0.05 255.77)',
                    700: 'oklch(42.29% 0.04 256.09)',
                    800: 'oklch(38.20% 0.04 254.91)',
                    900: 'oklch(32.23% 0.03 257.53)',
                    950: 'oklch(26.77% 0.02 262.46)',
                },
                card: {
                    50: 'oklch(97.59% 0.00 264.54)',
                    100: 'oklch(95.07% 0.01 247.88)',
                    200: 'oklch(88.89% 0.01 252.10)',
                    300: 'oklch(78.75% 0.03 253.98)',
                    400: 'oklch(66.87% 0.04 251.01)',
                    500: 'oklch(57.16% 0.04 252.00)',
                    600: 'oklch(49.03% 0.04 254.74)',
                    700: 'oklch(44.84% 0.04 255.72)',
                    800: 'oklch(38.30% 0.03 256.22)',
                    900: 'oklch(35.24% 0.02 253.58)',
                    950: 'oklch(27.12% 0.02 259.78)',
                },
                text: {
                    50: 'oklch(97.79% 0.00 228.78)',
                    100: 'oklch(96.32% 0.00 247.86)',
                    200: 'oklch(89.13% 0.01 242.85)',
                    300: 'oklch(79.66% 0.02 235.80)',
                    400: 'oklch(68.07% 0.03 235.10)',
                    500: 'oklch(58.40% 0.04 238.60)',
                    600: 'oklch(50.07% 0.03 243.93)',
                    700: 'oklch(43.45% 0.03 244.67)',
                    800: 'oklch(39.12% 0.02 243.50)',
                    900: 'oklch(35.54% 0.02 248.38)',
                    950: 'oklch(27.71% 0.01 243.31)',
                },
                button: {
                    50: 'oklch(97.51% 0.01 244.25)',
                    100: 'oklch(94.94% 0.03 240.65)',
                    200: 'oklch(89.49% 0.06 236.48)',
                    300: 'oklch(81.66% 0.10 235.16)',
                    400: 'oklch(74.03% 0.14 236.89)',
                    500: 'oklch(66.94% 0.16 241.62)',
                    600: 'oklch(59.52% 0.15 246.29)',
                    700: 'oklch(48.63% 0.13 247.16)',
                    800: 'oklch(43.11% 0.11 245.28)',
                    900: 'oklch(38.12% 0.09 245.42)',
                    950: 'oklch(28.82% 0.07 246.56)',
                },
            },
        },
    },
    plugins: [],
};

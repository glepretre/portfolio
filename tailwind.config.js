/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-blue': '#00f3ff',
                'neon-purple': '#bc13fe',
                'deep-space': '#0a0a12',
                'glass': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
            },
        },
    },
    plugins: [],
}

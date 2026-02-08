/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./index.tsx",
        "./App.tsx",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050508",
                surface: "#0a0a12",
                gold: {
                    DEFAULT: "#D4AF37",
                    light: "#E5C76B",
                    dark: "#B8952E",
                },
                blue: {
                    DEFAULT: "#3882F6",
                },
            },
            animation: {
                "fade-up": "fade-up 0.6s ease-out forwards",
                "fade-in": "fade-in 0.5s ease-out forwards",
                "glow": "glow 2s ease-in-out infinite",
                "shimmer": "shimmer 2s linear infinite",
            },
            keyframes: {
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "glow": {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.6" },
                },
                "shimmer": {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            backgroundImage: {
                "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
                "gold-gradient": "linear-gradient(135deg, #D4AF37, #F1D279, #B8952E)",
            },
        },
    },
    plugins: [],
}

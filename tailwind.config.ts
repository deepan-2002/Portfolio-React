import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Slate 900
                secondary: "#334155", // Slate 700
                accent: "#38bdf8", // Sky 400
                background: "#020617", // Slate 950
                text: "#f8fafc", // Slate 50
                "text-muted": "#94a3b8", // Slate 400
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.5s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transformers: "translateY(20px)", opacity: "0" },
                    "100%": { transformers: "translateY(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;

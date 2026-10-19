import type { Config } from "tailwindcss";

const config: Config = {
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
    extend: {
    colors: {
        electric: "#0022FF",
        lavender: "#DDE5FE",
        "slate-dark": {
        DEFAULT: "#0B0F19",
        secondary: "#111827",
        },
    },
    fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
    },
    },
},
plugins: [],
};

export default config;
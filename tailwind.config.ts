import type { Config } from 'tailwindcss'

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                xsm:"500px",
                sm:"600px",
                md:"690px",
                lg:"988px",
                xl:"1078px",
                xxl:"1265px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config
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
                textGray: '#71767b',
                textGrayLight: '#c7e9ea',
                borderGray: '#2f3336',
                inputGray: '#20327',
                iconsBlue: '#1d9bf0',
                iconGreen: '#00ba7c',
                iconPink: '#f91880'
            },
        },
    },
    plugins: [],
} satisfies Config
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        './composables/**/*.{js,ts}',
        './app.vue',
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '360px',
                md: '768px',
                lg: '1024px',
                xl: '1440px',
                '2xl': '1920px',
            },
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            maxWidth: {
                'content': '1440px',
                'body': '1920px',
            },
            fontFamily: {
                custom: ['Nunito', 'sans-serif'],
            },
            colors: {
                'brand-blue': '#00AEE7',
                'brand-blue-10': '#E6F7FD',
                'black': '#333C4E',
                'dark-grey': '#7E8890',
                'medium-grey': '#CED8DE',
                'light-grey': '#F3F5F7',
                'white': '#FFFFFF'
            },
        }
    },
    safelist: [
        { pattern: /bg-(brand-blue|brand-blue-10|black|dark-grey|medium-grey|light-grey|white)/ },
        { pattern: /text-(brand-blue|brand-blue-10|black|dark-grey|medium-grey|light-grey|white)/ },
        { pattern: /border-(brand-blue|brand-blue-10|black|dark-grey|medium-grey|light-grey|white)/ },
        { pattern: /hover:border-(brand-blue|brand-blue-10|black|dark-grey|medium-grey|light-grey|white)/ },
    ],
}
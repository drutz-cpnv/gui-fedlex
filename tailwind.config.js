/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.html.twig",
    ],
    theme: {
        extend: {
            colors: {
                'gray-300': "#F2F2F4",
                'primary': '#252525',
            }
        },
        fontFamily: {
            sans: ['din-2014', 'sans-serif'],
        },
    },
    plugins: [],
}
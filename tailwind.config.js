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
            sans: ['Bahnschrift Flex', 'sans-serif'],
        },
    },
    plugins: [],
}
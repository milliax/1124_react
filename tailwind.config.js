/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,tsx,jsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': "opacity-0",
                    '100%': "opacity-100"
                }
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out'
            }
        },
    },
    plugins: [],
}


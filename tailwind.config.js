/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./resources/**/*.{jinja,js,html}',   "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {
            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
    },
    plugins: [require('flowbite/plugin')],
};

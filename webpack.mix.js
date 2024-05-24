let mix = require('laravel-mix');
const path = require('path');
require('mix-tailwindcss');

mix.setPublicPath('static')

mix.js('resources/js/keyword-create.js', 'js')
.js('resources/js/login.js', 'next-js')
.js('resources/js/site-create.js', 'js')
.js('resources/js/editor.js', 'js')
.js('resources/js/app.js', 'js')
.js('resources/js/customize/next-text.js', 'js/customize')


mix.postCss('resources/css/app.css', 'css').tailwind('tailwind.config.js');

mix.version()
mix.webpackConfig({
    target: ['web', 'es5'],
    resolve: {
        modules: ['node_modules']
    }
})
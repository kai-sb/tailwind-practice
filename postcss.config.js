const production = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV);

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        production &&
        require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        }),
        production && require('cssnano')
    ]
};
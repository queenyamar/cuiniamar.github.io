const mix = require('laravel-mix');

mix.js('src/js/main.js', 'dist/js')
   .sass('src/scss/main.scss', 'dist/css');

module.exports = {
   plugins: {
         "autoprefixer": {}
   }
}
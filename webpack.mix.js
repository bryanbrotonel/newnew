let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css');

mix.scripts([
	'resources/assets/js/main.js',
  'resources/assets/js/index.js',
	'resources/assets/js/login.js',
  'resources/assets/js/contact.js',
  'resources/assets/js/dashboard.js',
], 'public/js/app.js');

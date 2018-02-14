/**
 * Task to compile stylesheets from Sass files.
 *
 * Tasks:
 * - Compiles stylesheets
 * - Autoprefixes
 * - Sourcemaps
 * - Puts to destination
 * - Success/error message
 */

'use strict';

module.exports = function(gulp, $, config) {
  gulp.task('styles', function() {
  	return gulp.src(config.sass.src)
  		.pipe($.sourcemaps.init())
  		.pipe($.sass(config.sass.config))
  		.pipe($.autoprefixer({
  			browsers: config.sass.autoprefixer
  		}))
  		.pipe($.sourcemaps.write(config.sass.sourcemaps))
  		.pipe(gulp.dest(config.sass.destination))
  });
};

/**
 * Gulp task runner for managing assets in a project.
 *
 * Before running first task make sure you have all node modules installed.
 * To do so navigate to this folder and run the following command:
 *
 * @command: npm install
 *
 * Tasks available:
 *
 * - gulp (default)
 * First runs the build task to build all the assets,
 * then runs the watch task to watch for changes on the files.
 *
 * - gulp build
 * Runs only the initial tasks to build all the assets.
 *
 */

'use strict';

// Include gulp
var gulp = require('gulp');

// Config file
var config = require('./gulp/config.json');

// Auto load all required plugins
var $ = require('gulp-load-plugins')({
	pattern: '*',
	scope: 'dependencies',
	rename: {
		'jshint': 'jshintCore',
		'jshint-stylish': 'stylish'
	}
});

// Load tasks from files
$.loadSubtasks('gulp/tasks/*.js', $, config);

// Default Gulp task to Run
gulp.task('default', function() {
	gulp.start('build', 'watch');
});

// Gulp build task to run all tasks just once
gulp.task('build', function() {
	gulp.start('styles', 'scripts', 'images');
});

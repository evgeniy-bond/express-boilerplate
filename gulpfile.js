var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
const PORT = process.env.PORT || '3000';

gulp.task('default', ['browser-sync'], function () {
	() => console.log(`Server was running on port ${PORT}`);
});

gulp.task('browser-sync', ['nodemon'], function () {
	browserSync.init(null, {
		proxy: `localhost:${PORT}`,
		port: 3001,
		browser: "google chrome",
	});
});

gulp.task('nodemon', cb => {

	var started = false;

	return nodemon({
		script: './bin/www'
	}).on('start', () => {
		// to avoid nodemon being started multiple times
		if (!started) {
			cb();
			started = true;
		}
	});
});
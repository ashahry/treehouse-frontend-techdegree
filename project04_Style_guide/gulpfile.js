var gulp = require('gulp'); // The first step to using Gulp is to require it in the gulpfile. This tells Node to find a package named gulp inside the node_module directory. Once found. assigned it to this variable.
var sass = require('gulp-sass'); // Requires the gulp-sass plugin

// First task: compile Sass to CSS

gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss') // Gets source from all files (via globs) ending with .scss in app/scss and children dirs
    .pipe(sass()) //Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css')) // sets the distination. In this case, it's in css directory.
})

// Second task: Watch

gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass')); //  for version gulp 4.xx .series returns a function that only executes the specified task:
});

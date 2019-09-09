const gulp = require('gulp')
const formatHtml = require('./index')

function views() {
  return gulp
    .src('dev/**/*.html')
    .pipe(
      formatHtml({
        end_with_newline: true,
        max_preserve_newlines: 1,
        indent_scripts: 'separate',
        verbose: true,
      })
    )
    .pipe(gulp.dest('dist'))
}

exports.dev = gulp.series(views)

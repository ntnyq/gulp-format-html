const gulp = require('gulp')
const formatHtml = require('./index')

function views() {
  return gulp
    .src('dev/**/*.html')
    .pipe(
      formatHtml({
        indent_inner_html: true,
        end_with_newline: true,
        max_preserve_newlines: 1,
        indent_scripts: 'separate'
      })
    )
    .pipe(gulp.dest('dist'))
}

exports.dev = gulp.series(views)

const gulp = require('gulp')
const formatHtml = require('./index')

function views() {
  return gulp
    .src('dev/**/*.html')
    .pipe(
      formatHtml({
        indent_inner_html: true
      })
    )
    .pipe(gulp.dest('dist'))
}

exports.dev = gulp.series(views)

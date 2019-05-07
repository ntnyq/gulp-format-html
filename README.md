# gulp-format-html

A simple gulp plugin for html files formatting.

__gulp-format-html__ is based on [js-beautify](https://github.com/beautify-web/js-beautify).

## Install

``` bash
$ npm install gulp-format-html --save-dev

# or
$ yarn add gulp-format-html -D
```

## Setup

``` js
var gulp = require('gulp')
var formatHtml = require('gulp-format-html')

function views () {
  return (
    gulp
      .src('views/**/*.html')
      .pipe(formatHtml())
      .pipe(gulp.dest('dist'))
  )
}

exports.dev = gulp.series(views)
```

## Example

``` html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>gulp-format-html</title></head><body><header><h1><span>I am h1 in header</span></h1></header><main><p><span>span</span><b>b</b><strong>strong</strong><em>em</em></p></main><footer><p><a href="https://github.com/ntnyq/gulp-format-html">gulp-format-html</a></p></footer></body></html>
```

result

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>gulp-format-html</title>
</head>

<body>
  <header>
    <h1>
      <span>I am h1 in header</span>
    </h1>
  </header>
  <main>
    <p>
      <span>span</span>
      <b>b</b>
      <strong>strong</strong>
      <em>em</em>
    </p>
  </main>
  <footer>
    <p>
      <a href="https://github.com/ntnyq/gulp-format-html">gulp-format-html</a>
    </p>
  </footer>
</body>

</html>
```

## Options

Check __[js-beautify](https://github.com/beautify-web/js-beautify)__'s __HTML__ options for detail.

## License

[MIT](./LICENSE)

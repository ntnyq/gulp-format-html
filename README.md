# gulp-format-html

> __Migrated to [gulp-plugins](https://github.com/ntnyq/gulp-plugins)__

:beer: A simple Gulp plugin for html files formatting.

## Install

``` bash
$ npm install gulp-format-html --save-dev
# OR
$ yarn add gulp-format-html -D
```

## Setup

``` js
const gulp = require('gulp')
const formatHtml = require('gulp-format-html')

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

Input:

``` html
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>gulp-format-html</title></head><body><header><h1><span>I am h1 in header</span></h1></header><main><p><span>span</span><b>b</b><strong>strong</strong><em>em</em></p></main><footer><p><a href="https://github.com/ntnyq/gulp-format-html">gulp-format-html</a></p></footer></body></html>
```

Output:

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

__gulp-format-html__ is based on [js-beautify](https://github.com/beautify-web/js-beautify), Check it's [HTML options](https://github.com/beautify-web/js-beautify#css--html) for detail.

### verbose

- __type__ `boolean`
- __default__ `false`

Display name of file from stream that is being formatting

## Related

- [gulp-diffable-html](https://github.com/ntnyq/gulp-diffable-html) Zero config HTML formatter to make HTML more readable and to indent HTML tag text in a single newline.

## License

[MIT](./LICENSE) &copy; [@ntnyq](https://github.com/ntnyq)

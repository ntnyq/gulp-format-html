# gulp-format-html

[![NPM VERSION](https://img.shields.io/npm/v/gulp-format-html.svg)](https://www.npmjs.com/package/gulp-format-html)
[![NPM DOWNLOADS](https://img.shields.io/npm/dm/gulp-format-html.svg)](https://www.npmjs.com/package/gulp-format-html)
[![LICENSE](https://img.shields.io/github/license/ntnyq/gulp-format-html.svg)](https://github.com/ntnyq/gulp-format-html/blob/master/LICENSE)

:beer: A simple gulp plugin for html files formatting.

__gulp-format-html__ is based on [js-beautify](https://github.com/beautify-web/js-beautify).

## Install

``` bash
$ npm install gulp-format-html --save-dev
# OR
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

__gulp-format-html__ options.

| Option | Description | Type | Default |
| ---- | ---- | ---- | ---- |
| indent_size | Indentation size | Number | 2 |
| indent_char | Indentation character | String | ' ' |
| indent_with_tabs | Indent with tabs | Boolean | false |
| eol | Character(s) to use as line terminators | String | '\\n' |
| end_with_newline | End output with newline | Boolean | false |
| preserve_newlines | Preserve existing line-breaks | Boolean | true |
| max_preserve_newlines | Maximum number of line-breaks to be preserved in one chunk | Number | 10 |
| indent_inner_html | Indent \<head\> and \<body\> sections | Boolean | false |
| brace_style |  | 'collapse-preserve-inline\|collapse\|expand\|end-expand\|none' | collapse |
| indent_scripts | Indent \<script\> content | 'keep\|separate\|normal' | 'normal' |
| wrap_line_length | Maximum characters per line (0 disables) | Number | 250 |
| wrap_attributes | Wrap attributes to new lines | 'auto\|force\|force-aligned\|force-expand-multiline\|aligned-multiple\|preserve\|preserve-aligned' | auto |
| wrap_attributes_indent_size | Indent wrapped attributes to after N characters | Number | indent_size | inline | List of tags to be considered inline tags | Array | [] |
| unformatted | List of tags that should not be reformatted | Array | inline |
| content_unformatted | List of tags whose content should not be reformatted | Array | ['pre', 'script'] |
| extra_liners | List of tags that should have an extra newline before them | Array | [head,body,/html] |
| indent_empty_lines | Keep indentation on empty lines | Boolean  | false |
| editorconfig |  Use EditorConfig to set up the options | String\|false | false |

Check __[js-beautify](https://github.com/beautify-web/js-beautify)__'s __HTML__ options for detail.

## License

[MIT](./LICENSE)

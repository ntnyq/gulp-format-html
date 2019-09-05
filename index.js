var beautifyHtml = require('js-beautify').html
var through2 = require('through2').obj

var CONTENT_UNFORMATTED_TAGS = ['pre', 'textarea', 'script']

module.exports = function(opts) {
  opts = opts || {}
  opts.indent_size = opts.indent_size || 2
  opts.inline = opts.inline || []
  opts.content_unformatted =
    opts.content_unformatted || CONTENT_UNFORMATTED_TAGS

  return through2(function(file, enc, cb) {
    if (file.isNull()) return cb(null, file)

    file.contents = Buffer.from(beautifyHtml(file.contents.toString(), opts))
    cb(null, file)
  })
}

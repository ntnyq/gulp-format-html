var beautifyHtml = require('js-beautify').html
var through2 = require('through2').obj

module.exports = function(opts) {
  opts = opts || {}
  opts.indent_size = opts.indent_size || 2
  opts.inline = opts.inline || []
  opts.content_unformatted = ['pre', 'script']

  return through2(function(file, enc, cb) {
    if (file.isNull()) return cb(null, file)

    file.contents = Buffer.from(beautifyHtml(file.contents.toString(), opts))
    cb(null, file)
  })
}

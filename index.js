const beautifyHtml = require("js-beautify").html;
const through2 = require("through2").obj;

module.exports = function(options = {}) {
  options.indent_size = options.indent_size || 2;
  options.indent_char = options.indent_char || " ";
  options.inline = options.inline || [];

  return through2(function(file, encoding, callback) {
    file.contents = Buffer.from(
      beautifyHtml(file.contents.toString(), options)
    );
    callback(null, file);
  });
};

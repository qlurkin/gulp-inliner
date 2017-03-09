var through = require('through2');
var Inliner = require('inliner');

module.exports = function() {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      var content = [];
      file.contents.on('data', function(chunk){
        content.push(chunk);
      });
      file.contents.on('end', function(){
        content = Buffer.concat(content).toString();
        new Inliner(content, function (error, result) {
          file.contents = new Buffer(result)
          callback(null, file);
        });
      });
    } else if (file.isBuffer()) {
      var content = String(file.contents);
      new Inliner(content, function (error, result) {
        file.contents = new Buffer(result)
        callback(null, file);
      });
    }

  });
};

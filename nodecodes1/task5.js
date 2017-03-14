//file content read
function readContent(s){
  var fs = require("fs");

  fs.readFile(s[0], function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  });

}
exports.readContent = readContent;
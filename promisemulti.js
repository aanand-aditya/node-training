var Promise = require('es6-promise').Promise;
var fs = require("fs");
function readContent(s){

  var fs = require("fs"), f1 = "file1.txt", f2 = "file2.txt", f3 = "file3.txt";
    
  
  makePromise(f1).then(res => makePromise(f2))
                 .then(res => makePromise(f3))
                 .catch((err) => console.log(err));
  }
function makePromise(file){
 return new Promise(function(resolve,reject){
  fs.readFile(file, function (err, data) {
    if (err) 
      reject(err);
    else
      resolve(printContent(data));
  });
 });
}

function printContent(data){
  var fileContent = data.toString();
    var contentline = fileContent.split("\n");
    contentline.forEach(function(line){
      console.log(line);
    })
    
    console.log('===================')
    
}
readContent();

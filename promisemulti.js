var Promise = require('es6-promise').Promise;

function readContent(s){

  var fs = require("fs"), f1 = "file1.txt", f2 = "file2.txt", f3 = "file3.txt";
  var file1 = new Promise(function(resolve,reject){
    resolve(checkFile(f1));
    });
  var file2 = new Promise(function(resolve,reject){
   resolve(checkFile(f2));
    });
  var file3 = new Promise(function(resolve,reject){
    resolve(checkFile(f3));
  });
  
    
file1.then((val) => console.log(val))
  .then(file2.then((val) => console.log(val)))
  .then(file3.then((val) => console.log(val)))
  .catch((err) => console.log(err));
}

function checkFile(file)
{
  fs.readFile(file, function (err, data) {
    if (err) 
      return(err);
    else
      return(printContent(data));
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

var Promise = require('es6-promise').Promise;
function readContent(s){

  var fs = require("fs"), f1 = "file1.txt", f2 = "file2.txt", f3 = "file3.txt";
  var p1 = new Promise(function(resolve,reject){
    fs.readFile(f1, function (err, data) {
    if (err) 
      reject(err);
    else
      resolve(printContent(data));
  });
  });
  var p2 = new Promise(function(resolve,reject){
    fs.readFile(f2, function (err, data) {
    if (err) 
      reject(err);
    else
      resolve(printContent(data));
  });
  });
  var p3 = new Promise(function(resolve,reject){
    fs.readFile(f3, function (err, data) {
    if (err) 
      reject(err);
    else
      resolve(printContent(data));
  });
  });
  
    
p1.then((val) => console.log(val))
  .then(p2.then((val) => console.log(val)))
  .then(p3.then((val) => console.log(val)))
  .catch((err) => console.log(err));

/*p2.then((val) => console.log(val))
  .catch((err) => console.log(err));

p3.then((val) => console.log(val))
  .catch((err) => console.log(err));*/


 
    

}
function printContent(data){
  var fileContent = data.toString();
    var contentline = fileContent.split("\n");
    contentline.forEach(function(line){
      console.log(line);
    })
    //console.log('\n');
    console.log('===================')
    
}
readContent();

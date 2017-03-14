function readContent(s){
  var fs = require("fs"), f1 = "file1.txt", f2 = "file2.txt", f3 = "file3.txt";
  
  fs.readFile(f1, function (err, data) {
    if (err) return console.error(err);
    printContent(data);
    

    fs.readFile(f2, function (err, data) {
      if (err) return console.error(err);
      printContent(data);
    

      fs.readFile(f3, function (err, data) {
        if (err) return console.error(err);
        printContent(data);
      });


    });


  });

    

}
function printContent(data){
    var fileContent=data.toString();
    var contentlines=fileContent.split("\n");
    contentlines.forEach(function(line){
      console.log(line);
    })
    
    console.log('===================')
    
}
readContent();

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
  var s1=data.toString();
    var s2=s1.split("\n");
    s2.forEach(function(line){
      console.log(line);
    })
    //console.log('\n');
    console.log('===================')
    
}
readContent();

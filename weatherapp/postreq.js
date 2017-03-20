var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.post('/friends',function(req,res){
  var first = req.body[0].name;
  var second = req.body[1].name;
  var third = req.body[2].name;
  res.send("first friend: "+first+" second friend: "+second+" third friend: "+third);
  
})
app.listen(3000)

//json-body => [{"name":"sachin"},{"name":"Dravid"},{"name":"Ganguly"}]
//output => first friend: sachin second friend: Dravid third friend: Ganguly
var soap = require('soap');
var soapURL = 'http://www.webservicex.net/globalweather.asmx?wsdl';
var parser = require('xml2json');
var express = require('express')
var app = express();

function getClient(url) {
  return new Promise((resolve, reject) => {
    soap.createClient(url, (err, client) => {
      if(err)
        return reject(err);
      resolve(client);
    });
  });
}

function getCitiesByCountry(country,getValue) {
  var body = { CountryName: country };
  getClient(soapURL)
   .then(client => {
      client.GetCitiesByCountry(body, (err, result) => {
        var value = parser.toJson(result.GetCitiesByCountryResult, {object: true});
        getValue(value.NewDataSet.Table);
      })
    })
   .catch(error => console.log(error));
}

function getValue(value){
  return value;
}

app.get('/countries', function (req, res) {
  var country = req.param('cname');
  var result = getCitiesByCountry(country,ans =>{
    res.send(ans);
  });
})

app.listen(3000) 

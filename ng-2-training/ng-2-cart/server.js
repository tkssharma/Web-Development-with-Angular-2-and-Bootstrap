var express = require('express');
var path = require('path');
var json = require('./mock/product.js')
var app = express();
app.use(function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
const jsonPath = path.join(__dirname, './mock/product.json');

app.get('/api', function (req, res) {

   res.json(json)
});

var server = app.listen(3000, function () {

 var host = server
  .address()
  .address;
 var port = server
  .address()
  .port;

 console.log('Example app listening at http://%s:%s', host, port);

});
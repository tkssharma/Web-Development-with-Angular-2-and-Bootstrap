var express = require('express');
var path = require('path');

var app = express();
app.use(function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});
const jsonPath = path.join(__dirname, './mock/app.json');
const jsonPath1 = path.join(__dirname, './mock/app1.json')
const jsonPath2 = path.join(__dirname, './mock/app2.json')

app.get('/api', function (req, res) {

 if (req.query.name && req.query.location && req.query.company) {
  res.sendFile(jsonPath2)
 } else if (req.query.location) {
  res.sendFile(jsonPath1)
 } else if (req.query.name) {
  res.sendFile(jsonPath1)
 } else {
  res.sendFile(jsonPath)
 }
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
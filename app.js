var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Woodshed!');
});
app.get('/index', function (req, res) {
  res.send('Test index!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
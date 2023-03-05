var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('*', function(req, res){
    res.send('page not found', 404);
  });
app.listen(3000, function () {
  console.log('server running on port 3000!');
});
var express = require('express');

var app = express.createServer(express.logger());

var x = fs.readFileSync("index.html");
var y = x.toString();


app.get('/', function(request, response) {
  response.send(''+y);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

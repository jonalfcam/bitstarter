var express = require('express');
var fs = require('fs'); 
var app = express.createServer(express.logger());





app.get('/', function(request, response) {
    var x = fs.readFileSync('index.html');
    var y = x.toString();
    response.send(''+y);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

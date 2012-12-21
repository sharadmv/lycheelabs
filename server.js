var fs = require("fs");
var express = require('express');

var app = express.createServer();

var dummy = fs.readFileSync("views/dummy.html");

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/projects', function(req, res) {
	res.render('projects');
});



app.get('/projects/dummy', function(req, res) {
	res.end(dummy);
});

app.use('/', express.static(__dirname + "/public"));

var port = process.env.PORT || 8000;

app.listen(port);
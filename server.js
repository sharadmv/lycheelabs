var fs = require("fs");
var express = require('express'),
    engine = require("ejs-locals"),
    store = require('./store');

var app = express();
app.engine('ejs', engine);

app.configure(function() {
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
});

app.get('/', function(req, res) {
	res.render('index', {title: "welcome!"});
});

app.get('/about', function(req, res) {
	res.render('about', {title: "about us"});
});

app.get("/home", function(req, res) {
	res.render('index', {title: "welcome!"});
});

app.get('/projects', function(req, res) {
	res.render('projects');
});

app.get('/projects/dummy', function(req, res) {
	res.render('dummy', {title: "projects"});
});

app.get('/store', function(req, res) {
    store.items(function(items) {
	    res.render('store', {title : "store", items : items});
    });
});
app.get('/store/item/:id', function(req, res) {
    store.item(req.params.id, function(item) {
        console.log(item);
	    res.render('item', {title : "store", item : item});
    });
});

app.get('/cart', function(req, res) {
	res.render('cart', {title : "cart"});
});

app.get('/checkout', function(req, res) {
	res.render('projects');
});

app.use('/', express.static(__dirname + "/public"));

var port = process.env.PORT || 8000;

app.listen(port);
console.log("Server listening on", port);

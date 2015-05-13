var express = require('express'),
	http = require('http');

var app = express()
	.use(express.static('public'));

app.get('/*', function (req, res){
	res.json(404, { status: 'Not Found'});
});

http.createServer(app).listen(3000, function(){
	console.log("Server already at http://localhost:3000");
});
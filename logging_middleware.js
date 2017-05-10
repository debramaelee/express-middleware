// Write an express middleware that will print (console.log) out the request method and the request path of all requests in the app, and delegate to the regular route handler.

const express = require('express');
const app = express();


app.use(function middleWare(req, res, next){
	console.log(req.method, req.path);
	next();
});

app.get('/', function middleWare(req, res){
	res.send('Greetings...');
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
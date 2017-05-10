// Write an express middleware that will log the same information as above, but in a log file. Log the information using fs or fs-promise.

const express = require('express');
const app = express();

const request = require('request-promise');
const fs = require('fs-promise');

app.use(function(req, res, next){
	var contents = req.method + ' ' + req.path + '\n';
	fs.appendFile('logfile.txt', contents)
		.then(function(){
			next();
		})
		.catch(next);
});

app.get('/', function middleWare(req, res){
	res.send('Greetings...');
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
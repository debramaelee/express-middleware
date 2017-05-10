// Write an express application - start one from scratch - that uses express-session. There are two pages: /ask, and /greet. The ask page asks the user to put in a name, and the greet page displays the greeting showing their name. You'll need to:

// Create an ask page that displays a form which submits to a submit handler, say /submit_name.
// The /submit_name handler will retrieve the name and save it into the session as a session variable.
// The greet page will display a greeting to the user's name as fetched from the session.

const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function middleWare(request, response, next){
	// console.log(request.method, request.path);
	next();
});

app.use(session({
	secret: 'shhhhhh',
	cookie: {
		maxAge: 10000
	}
}));

// Make session automatically available to all hbs files
app.use(function(request, response, next) {
  response.locals.session = request.session;
  next();
});

app.get('/', function(request, response){
	response.render('hello.hbs');
});

// view handler
app.get('/ask', function(request, response){
	response.render('ask.hbs');
});

// writing "name" to session variable
app.post('/submit_name', function(request, response){
	request.session.guest_name = request.body.your_name;
	response.redirect('/');
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local'), Strategy;
// var logger = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 3000;

mongoose.Promise = Promise;

// var controllers = require('./controllers');
var users = require('./controllers/users');
var contests = require('./controllers/contests');
<<<<<<< HEAD
var participants = require('./controllers/participants');
=======
var finals = require('./controllers/finals');
var results = require('./controllers/results');
var dancers = require('./controllers/dancers');
>>>>>>> 525449075ea63cb970920e20bde180e9d2271d90

// Init App
var app = express();

// Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(cookieParser());

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
// Express Session
app.use(session( {
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}))

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator( {
	errorFormatter: function(param, msg, value) {
		var namespace = param.split('.')
		, root = namespace.shift()
		, formParam = root;

		while(namespace.length) {
			formParam += '[' + namespace.shift() + ']';
		}
		return {
			param: formParam,
			msg: msg,
			value: value
		};
	}
}));

// Connect Flash middleware
app.use(flash());

// Global vars
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
})
<<<<<<< HEAD
var router = express.Router();
// var Participant = require("./models/participant");
=======
>>>>>>> 525449075ea63cb970920e20bde180e9d2271d90


app.use('/users', users);
app.use('/contests', contests);
<<<<<<< HEAD
app.use('/participants', participants);
=======
app.use('/results', results);
app.use('/finals', finals);
app.use('/dancers', dancers);
>>>>>>> 525449075ea63cb970920e20bde180e9d2271d90


mongoose.connect("mongodb://dinoman:UACodingB00tcamp@ds139904.mlab.com:39904/wcs", {
  useMongoClient: true
});

// mongoose.connect("mongodb://localhost/wcs", {
// 	useMongoClient: true
//   });

var db = mongoose.connection;

db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
  app.listen(port, function() {
		console.log("App listening on PORT " + port);
	});
});


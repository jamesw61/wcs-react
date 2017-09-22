var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
// Requiring our Todo model
// var db = require("../models");
var User = require("../models/User.js");
var Validator = require("validator");
// Register
router.get('/register', function(req, res) {
    // res.render('register');
});

// Login
router.get('/login', function(req, res) {
    // res.render('login');
});

// If the user enters the correct password, they will be directed to the dashboard
// Otherwise, a message will flash saying that the password is incorrect
router.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/users/login', failureFlash: true }),
    function(req, res) {
        console.log('req.body', req.body);
        res.send('post successful');
    }
);

router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    // res.redirect('login');
});

passport.use(new LocalStrategy(

    function(username, password, done) {
        console.log('passport username', username);
        // console.log('passport password', password);
    	// Search the database for the given user
        // db.User.findOne({ where: {username: username, password: password }}).then(function(dbUser) {
        User.find({ "username": username }, function(error, doc) {
            if (error) {
                console.log('Broken');
            }
            else {
                // console.log('doc pass', doc[0].password);
                // return res.render("index", { bacon: doc });
                comparePassword(password, doc[0].password, function(err, isMatch) {
                if(err) throw err;

                // if the hash matches the password, return the user
                // Otherwise, return the message: "Invalid Password"
                    if(isMatch) {
                        console.log('isMatch');
                        return done(null, doc[0]);
                        }
                    else {
                        console.log('else  isMatch');
                        return done(null, false, {message: 'Invalid Password'});
                        }
                });
            }
        });

        // db.User.findOne({ where: {username: username}}).then(function(dbUser) {
        	
        // 	// If the user is not in the database, send a message to let the user know
        // 	if(!dbUser) {
        // 		return done(null, false, {message: 'Unknown User'});
        // 	}

        // 	// Check the password against the hashed password in the database
        // 	// This function is located at the bottom of this file
        // 	comparePassword(password, dbUser.password, function(err, isMatch) {
        // 		if(err) throw err;

        // 		// if the hash matches the password, return the user
        // 		// Otherwise, return the message: "Invalid Password"
        // 		if(isMatch) {
        // 			return done(null, dbUser);
        // 		}
        // 		else {
        // 			return done(null, false, {message: 'Invalid Password'});
        // 		}
        // 	});
        // });
    }));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {

    User.find({ "_id": id }, function(error, doc) {
        done(null, doc);
    });
    // db.User.findOne({ where: {id: id }}).then(function(dbUser) {
        // done(null, dbUser.dataValues);

    // });

});

router.post('/register', function(req, res){


	// Take in form input from the registration form
	var last_name = req.body.last_name;
	var first_name = req.body.first_name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

    const { errors, isValid } = validateInput(req.body);

    // if (!isValid) {
    //     res.status(400).json(errors);
    // }
	// Validation
	// TODO:  Do not allow a username to be used more than once
	// req.checkBody('last_name', 'Last Name is required').notEmpty();
	// req.checkBody('first_name', 'First Name is required').notEmpty();
	// req.checkBody('email', 'Email is required').isEmail();
	// req.checkBody('username', 'Username is required').notEmpty();
	// req.checkBody('password', 'Password is required').notEmpty();
	// req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();
	if(errors) {
		console.log('val errors in register post', errors);
	}
	else {

		// Add new user to the database with hashed password
		createUser(last_name, first_name, email, username, password);
        res.send('created user');

		 // TODO:  Fix this flash message
		req.flash('success_msg', 'You are registered and can now login');

		// res.redirect('/users/login');
	}

});


module.exports = router;

// This function
// This function takes in user information and adds the user to the database
// with a hash for the password
createUser = function (last, first, email, username, password) {
	const saltRounds = 10;	
	bcrypt.genSalt(saltRounds, function(err, salt) {
		if (err) throw err;
		bcrypt.hash(password, salt, function (err, hash) {
                        			// db.User.create({
                        			// firstname: first,
                           //  		lastname: last,
                           //  		username: username,
                           // 			email: email,
                           //  		password: hash.toString()
                        		 //      });
                    var newUser = new User({
                          firstname: first,
                          lastname: last,
                          username: username,
                          email: email,
                          password: hash.toString()
                        });
                        // Using the save method in mongoose, we create our example library in the db
                        newUser.save(function(error, doc) {
                          // Log any errors
                          if (error) {
                            console.log(error);
                          }
                          // Or log the doc
                          else {
                            console.log(doc);
                          }
                        });

		});

	});
}


// This function compares the user's entered password with the hashed password
// in the database  
// The callback function returns a true or false statement if the the passwords
// match
comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if (err) throw err;
        callback(null, isMatch);
    });
}
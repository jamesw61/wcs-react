var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
// Requiring our Todo model
// var db = require("../models");
var User = require("../models/User.js");
var isEmpty = require('lodash.isempty');
var Validator = require('validator');


// Register
// router.get('/register', function(req, res) {
//     // res.render('register');
// });

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


    }));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(id, done) {

    User.find({ "_id": id }, function(error, doc) {
        done(null, doc);
    });

});

router.post('/register', function(req, res){

    console.log("made it here.");
        console.log(req.body    );
	// Take in form input from the registration form
	var last_name = req.body.last_name;
	var first_name = req.body.first_name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

    const { errors, isValid } = validateInput(req.body);

   
    if (!isValid) {
        // res.status(400).json(errors);
        res.send(errors);
    }
	else {

		// Add new user to the database with hashed password
		createUser(last_name, first_name, email, username, password);
        res.send(errors);
	}

});


module.exports = router;

// This function will validate the data
validateInput = function (data) {

    let errors = {};
        console.log("made it here.");
        console.log(data);
        
        if (Validator.isEmpty(data.last_name)) {
            errors.last_name = "Last Name is required"
        }
        if (Validator.isEmpty(data.first_name)) {
            errors.first_name = "First Name is required"
        }
        if (Validator.isEmpty(data.email)) {
            errors.email = "Email is required"
        }
        if (!Validator.isEmail(data.email)) {
            errors.email = "Email is invalid"
        }
        if (Validator.isEmpty(data.username)) {
            errors.username = "Username is required"
        }
        if (Validator.isEmpty(data.password)) {
            errors.password = "Password is required"
        }
        if (!Validator.equals(data.password2, data.password)) {
            errors.password2 = "Passwords must match"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }

}

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
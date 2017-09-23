var express = require('express');
var router = express.Router();
// var Participant = require("../models/participant.js");


var passport = require('passport');




var Dancer = require("../models/Dancer.js");



router.get('/participants', function(req, res) {
    console.log(req.body);
});


router.post('/participant', function(req, res){

	console.log("We made it to the server side");
	console.log(req.body);

	var lastName = req.body.lastName;
	var firstName = req.body.firstName;
	var division = req.body.division;
	var role = req.body.role;
	var bib_number = req.body.bib_number;


	// TODO:  Validate input


	var newDancer = new Dancer({
                          lastName: lastName,
                          firstName: firstName,
                          division: division,
                          role: role,
                          bib_number: bib_number
                        });
                        // Using the save method in mongoose, we create our example library in the db
                        newDancer.save(function(error, doc) {
                          // Log any errors
                          console.log("inside newDancer");
                          if (error) {
                            console.log(error);
                          }
                          // Or log the doc
                          else {
                          	console.log("A new dancer was created.");
                            console.log(doc);
                            console.log("no errors!")
                          }
                        });


});
        
       
module.exports = router;



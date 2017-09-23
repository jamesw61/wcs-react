var express = require('express');
var router = express.Router();
var isEmpty = require('lodash.isempty');
var Validator = require('validator');
var passport = require('passport');




var Dancer = require("../models/Dancer.js");



router.get('/participants', function(req, res) {
    console.log(req.body);
});


router.post('/participant', function(req, res){

	var lastName = req.body.lastName;
	var firstName = req.body.firstName;
	var division = req.body.division;
	var role = req.body.role;
	var bib_number = req.body.bib_number;


	// TODO:  Validate input
	const { errors, isValid } = validateInput(req.body);

	

	if (!isValid) {
        // res.status(400).json(errors);
        console.log(errors);
        res.send(errors);
    }
	else {

		var newDancer = new Dancer({
                          lastName: lastName,
                          firstname: firstName,
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
                          
                          }
                        });

		
        res.send(errors);
	}

	


});
        
       
module.exports = router;

// This function will validate the data
validateInput = function (data) {

    let errors = {};

        if (Validator.isEmpty(data.lastName)) {
            errors.lastName = "Last Name is required"
        }
        if (Validator.isEmpty(data.firstName)) {
            errors.firstName = "First Name is required"
        }
        if (Validator.isEmpty(data.division)) {
            errors.division = "Division is required"
        }
        if (!Validator.isEmpty(data.role)) {
            errors.role = "Email is invalid"
        }
        if (Validator.isEmpty(data.bib_number)) {
            errors.bib_number = "Bib Number is required"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }

}



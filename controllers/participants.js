var express = require('express');
var router = express.Router();
var isEmpty = require('lodash.isempty');
var Validator = require('validator');
var passport = require('passport');
var Participant = require("../models/Participant.js");


// router.get('/new', function(req, res) {
//     console.log(req.body);
// });



router.post('/new', function(req, res){

	var lastName = req.body.lastName;
	var firstName = req.body.firstName;
	var division = req.body.division;
	var role = req.body.role;
	var bib_number = req.body.bib_number;
  console.log(req.body);

	// Validate input
	const { errors, isValid } = validateInput(req.body);

	

	if (!isValid) {
  
        // Send the errors to the Participant.js react component
        res.send(errors);
    }
	else {

    // Instantiate a new instance of participant
		var newParticipant = new Participant({

                          lastname: lastName,
                          firstname: firstName,
                          division: division,
                          role: role,
                          bib_number: bib_number
                        });
                        // Using the save method in mongoose, we create our example library in the db
                        newParticipant.save(function(error, doc) {
                          
                          // Log any errors
                          if (error) {
                            console.log("inside errors");
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

        console.log("Validated the first.");
        if (Validator.isEmpty(data.firstName)) {
            errors.firstName = "First Name is required"
        }
        if (Validator.isEmpty(data.bib_number)) {
            errors.bib_number = "Bib Number is required"
        }

        return {
            errors,
            isValid: isEmpty(errors)
        }

}



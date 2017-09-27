var express = require('express');
var router = express.Router();
var passport = require('passport');
var Final = require("../models/final.js");


router.get("/:division", function(req, res) {
    console.log('inside final-results get');
    let division = req.params.division;
    console.log('division', division);
	Final.find({division : division}).exec(function(err, finalResults) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('finalResults', finalResults); 
                            console.log('results length:', finalResults.length); 
                            res.json(finalResults);






                        }
                    });
});

module.exports = router;
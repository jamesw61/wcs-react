var express = require('express');
var router = express.Router();
var passport = require('passport');
var Final = require("../models/Final.js");


router.get("/:division", function(req, res) {
    console.log('inside');
	Final.find({division : req.params.division}).exec(function(err, finalResults) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('finalResults', finalResults);  







                        }
                    });
});



module.exports = router;
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/Participant.js");
var Score = require("../models/Score.js");

router.get("/", function(req, res) {
	Participant.find({
                        role: role,
                        division: division
                    }).populate("scores").exec(function(partErr, partDoc) {
                        if (partErr) {
                            console.log(partErr);
                        } else {
                            console.log('part', partDoc);
                            // res.send(partDoc);

                        }
                    });


});

module.exports = router;
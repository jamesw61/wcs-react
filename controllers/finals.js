var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/Participant.js");
var Score = require("../models/Score.js");

router.get("/:round/:division", function(req, res) {
    console.log('inside');
	Participant.find({
                        role: req.params.role,
                        division: req.params.division,
                        role: "follow"
                    }).sort({ total: 1 }).limit(5).exec(function(totErr, followData) {
                        if (totErr) {
                            console.log(totErr);
                        } else {
                            console.log('followData', followData);

                                Participant.find({
                                    role: req.params.role,
                                    division: req.params.division,
                                    role: "lead"
                                }).sort({ total: 1 }).limit(5).exec(function(totErr, leadData) {
                                        if (totErr) {
                                                console.log(totErr);
                                        } else {
                                                    console.log('leadData', leadData);
                                                    leadData.sort(function(a, b){return 0.5 - Math.random()});
                                                    console.log('random', leadData);
                                                    let couples = {
                                                        "leadArray" : leadData,
                                                        "followArray" : followData
                                                    }

                                                    res.json(couples);
                                                    

                                            }
                                        });


                        }
                    });
});



module.exports = router;
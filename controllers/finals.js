var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/Participant.js");
var Score = require("../models/Score.js");

router.get("/:round/:division/:role", function(req, res) {
	Participant.find({
                        role: req.params.role,
                        division: req.params.division,
                        role: req.params.role
                    }).sort({ total: -1 }).limit(3).exec(function(totErr, totDoc) {
                        if (totErr) {
                            console.log(totErr);
                        } else {
                            console.log('part', totDoc);
                            res.json(totDoc);

                        }
                    });

});

module.exports = router;
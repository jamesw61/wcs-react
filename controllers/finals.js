var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/participant.js");
var Score = require("../models/Score.js");
var Final = require("../models/Final.js");

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
                            // console.log('followData', followData);

                                Participant.find({
                                    role: req.params.role,
                                    division: req.params.division,
                                    role: "lead"
                                }).sort({ total: 1 }).limit(5).exec(function(totErr, leadData) {
                                        if (totErr) {
                                                console.log(totErr);
                                        } else {
                                                    // console.log('leadData', leadData);
                                                    leadData.sort(function(a, b){return 0.5 - Math.random()});
                                                    // console.log('random', leadData);
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

router.post("/", function(req, res) {

    var judge = res.locals.user;
    var data = req.body.finalScores;
    var division = req.body.division;
    console.log('finals judge', judge);
    console.log('finalScores', data);
    console.log('division', division);

    let finalScoresArray = data.map((item, i)=>{
        let scoreObj = {
            place : i + 1,
            division: division,
            judge : judge[0]._id,
            lead : item.lead,
            follow : item.follow
        }
        return scoreObj
    });

    console.log('fsa', finalScoresArray[0]);

    for (let i = 0; i < finalScoresArray.length; i++){
        var newScore = new Final(finalScoresArray[i]);
        newScore.save(function(error, doc) {
            if (error) {
                console.log('mongo final save err', error)
            } else {
                    
                
            }
        });
    }
 res.send("posted");

});





module.exports = router;
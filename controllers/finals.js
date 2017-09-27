var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/Participant.js");
var Score = require("../models/Score.js");
var Final = require("../models/Final.js");
var Couple = require("../models/Couple.js");

router.get("/:round/:division", function(req, res) {

    console.log('inside finals/round/division');
    Participant.find({
        role: req.params.role,
        division: req.params.division,
        role: "follow"
    }).sort({ total: 1 }).limit(5).exec(function(follErr, followData) {
        if (follErr) {
            console.log(follErr);
        } else {
            Participant.find({
                role: req.params.role,
                division: req.params.division,
                role: "lead"
            }).sort({ total: 1 }).limit(5).exec(function(leadErr, leadData) {
                if (leadErr) {
                    console.log(leadErr);
                } else {

                    Final.find({ division: req.params.division }).exec(function(err, finalResults) {
                        if (err) {
                            console.log(err);

                        } else {
                            console.log('finalResults.length', finalResults.length);
                            if (finalResults.length === 0) {
                                leadData.sort(function(a, b) { return 0.5 - Math.random() });

                                let couplesArray = leadData.map((item, i) => {
                                    let coupleObj = {
                                        lead: item.bib_number,
                                        follow: followData[i].bib_number,
                                        division: req.params.division
                                    }
                                    return coupleObj
                                });
                                // console.log('couplesArray', couplesArray);

                                addCouples(couplesArray).then(() => {
                                    res.send('couples checked');
                                });

                            } else {
                                res.send('results > 0');
                            }
                        }
                    });
                }
            });
        }
    });
});

router.get("/couples/:round/:division", function(req, res) {
    Couple.find({ division: req.params.division }).exec(function(err, coupleResults) {
        // console.log('CR', coupleResults);
        res.json(coupleResults);

    });
});

router.post("/:judge", function(req, res) {

    var judge = req.params.judge;
    var data = req.body.finalScores;
    var division = req.body.division;
    console.log('finals judge', judge);
    console.log('finalScores', data);
    console.log('division', division);

    let finalScoresArray = data.map((item, i) => {
        let scoreObj = {
            place: i + 1,
            division: division,
            judge: judge,
            lead: item.lead,
            follow: item.follow
        }
        return scoreObj
    });

    console.log('fsa', finalScoresArray[0]);

    for (let i = 0; i < finalScoresArray.length; i++) {
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

function addCouples(couplesArray) {
    return new Promise( (resolve, reject)=> {
        function go(i) {
        if (i >= couplesArray.length) {
            resolve();
        } else {
            let newCouple = new Couple(couplesArray[i]);
            newCouple.save(function(error, doc) {
                if (error) {
                    console.log('new couple err', error)
                } else {
                    console.log('newCouple saved');
                    console.log('doc', doc);
                    return go(i + 1);
                }
            });
            
        }
    }
    go(0);
    });

}




module.exports = router;
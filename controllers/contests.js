var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/user.js");
var Participant = require("../models/participant.js");
var Score = require("../models/score.js");


// router.get("/judge", function(req,res){
//     let judge = "bruno";
//     // console.log('judge', judge);
//     res.send(judge);
// });

router.post("/api/auth", function(req,res){
    
    const {username, password } = req.body;
    console.log("this is the user");
});

// This route creates prelim and semi-finals judge sheets

// router.get("/judge/:round/:division/:role/evaluation", ensureAuthenticated, function(req, res) {
router.get("/:judge/:round/:division/:role", function(req, res) {
        console.log('---------------------------');
    var judge = req.params.judge;
    console.log('judge', judge);


    // var judge = "ff";
    // console.log('judge id', judge[0]._id);
    var division = req.params.division;
    var round = req.params.round;
    var role = req.params.role;

    // Capitalize Division and Role
    let Division = division.charAt(0).toUpperCase() + division.slice(1);
    let Role = role.charAt(0).toUpperCase() + role.slice(1);


    // Check route paramaters, If the route is bad, then re-direct to dashboard
    // if (badRoute(convention, round, division, role)) {
    //     res.redirect('/');
    //     return;
    // } else {


        // Check to see if the judge has judged this competition
        Score.find({
            judge: judge,
            division: division,
            round: round,
            role: role
        }).exec(function(err, doc) {
            if (err) {
                console.log('score err:');
                console.log(err);
            } else {
                // console.log('doc length:', doc.length)
                // console.log('doc[0]', doc);
                if (doc.length === 0) {
                    Participant.find({
                        role: role,
                        division: division
                    }).exec(function(partErr, partDoc) {
                        if (partErr) {
                            console.log(partErr);
                        } else {
                            // console.log('part', partDoc);
                            res.send(partDoc);
                            // res.render('prelim', { division: Division, role: Role, list: partDoc, round: round });

                        }
                    });
                } else {
                    console.log('doc length > 0');
                    res.send('doc length > 0');
                }
            }
        });


    // }
});


// This route posts the scores from the evaluation component.
router.post("/:judge/:round/:division/:role", function(req, res) {

    var judge = req.params.judge;
    var data = req.body.scores;
    var division = req.params.division.toLowerCase();
    var round = req.params.round;
    var role = req.params.role.toLowerCase();

    let newScoresArray = data.map((item)=>{
        let scoreObj = {
            bib_number : item.bib_number,
            division: division,
            round : round,
            judge : judge,
            score : parseInt(item.score),
            role : role
        }
        return scoreObj
    });



    console.log('nsa[0]:', newScoresArray[0]);

    for (let i = 0; i < newScoresArray.length; i++){
        var newScore = new Score(newScoresArray[i]);
        newScore.save(function(error, doc) {
            if (error) {
            } else {
                Participant.findOneAndUpdate({ "bib_number": newScoresArray[i].bib_number }, { $push: { "scores": doc._id } })
                    .exec(function(err, doc) {
                        if (err) {
                            console.log('participant err' + err);
                        } else {
                            // res.send("posted");

                            console.log('participant score updated');
                        }
                    });
            }
        });
    }


    res.send("posted");
});


// // Search through an array of objects and find the index of the value
// function findIndex(array, value) {

//     for (var i = 0; i < array.length; i++) {

//         var object = array[i];
//         // var index = Object.values(array[i]).indexOf(value);
//         for (var key in object) {
//             if (object[key] == value)
//                 return i;
//         }
//     }
//     return -1;
// }


// // This function reads all of the scores and creates an array of the dancers with each of their scores
// function getParticipantScores(scores) {

//     var participants = [];

//     for (var i = 0; i < scores.length; i++) {

//         // find the index of the particular bib_number in the participants array
//         var index = findIndex(participants, scores[i].bib_number);
//         var judge = "judge" + scores[i].judge;
//         var score = scores[i].score;

//         // Create a new dancer if the dancer has not been added to the list
//         if (index == -1) {
//             var dancer = {
//                 bib_number: scores[i].bib_number,
//                 name: scores[i].Participant.firstname + " " + scores[i].Participant.lastname,
//                 [judge]: score,
//                 total: score,

//             }
//             participants.push(dancer);
//         }

//         // Only add the judge score to the proper index
//         else {
//             participants[index][judge] = score;

//             //  Add the new judge's score to the total
//             participants[index].total += score;
//         }

//     } // End of loop

//     return participants;
// }

// function getRole(data, role) {
//     var scores = [];
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].Participant.role == role) {
//             scores.push(data[i]);
//         }
//     }
//     return scores;
// }


// function orderObjByKey(array, key) {
//     array.sort(function(a, b) { return a.total - b.total; });
//     return array;
// }

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {

        res.redirect('/users/login');
    }
}

function badRoute(object, param1, param2, param3) {
    if (object.contests.indexOf(param1) == (-1) ||
        object.divisions.indexOf(param2) == (-1) ||
        object.roles.indexOf(param3) == (-1)) {
        return true;
    } else
        return false;
}



module.exports = router;
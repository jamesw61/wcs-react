var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/User.js");
var Participant = require("../models/Participant.js");
var Score = require("../models/Score.js");


router.get("/judge", function(req,res){
    let judge = res.locals.user;
    // console.log('judge', judge);
    res.send(judge);
});

// This route creates prelim and semi-finals judge sheets

// router.get("/judge/:round/:division/:role/evaluation", ensureAuthenticated, function(req, res) {
    router.get("/judge/:round/:division/:role", function(req, res) {
        console.log('---------------------------');
    var judge = res.locals.user;
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
            judge: judge[0]._id,
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
                            console.log('part', partDoc);
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


// This route posts the results from the judge sheets and then redirects to the dashboard
router.post("/:round/:division/:role", function(req, res) {

    var judge = res.locals.user;
    // console.log("judge   " + judge.username);
    var data = req.body;
    console.log('scores', data.scores);
    var division = req.params.division.toLowerCase();
    var round = req.params.round;
    var role = req.params.role.toLowerCase();

    // for (let key in req.body) {
    //     let score = req.body[key];
    //     let bib_number = key;
    //     console.log('bib: ' + bib_number + '  score: ' + score);
    //     var newScore = new Score({
    //         bib_number: bib_number,
    //         division: division,
    //         round: round,
    //         judge: judge[0]._id,
    //         score: score,
    //         role: role
    //     });
        // newScore.save(function(error, doc) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('score saved');
        //         Participant.findOneAndUpdate({ "bib_number": bib_number }, { $push: { "scores": doc._id } })
        //             .exec(function(err, doc) {
        //                 if (err) {
        //                     console.log(err);
        //                 } else {
        //                     // res.json(doc);
        //                     console.log('participant score updated');
        //                 }
        //             });
        //     }
        // });


    // }
    // insert data into database
    // Contest.addScores(scores, round, division, judgeId);
    res.send("posted");
});

router.get("/results/:round/:division/:role", function(req, res) {

    let round = req.params.round;
    let division = req.params.division;
    let role = req.params.role;

    // Capitalize Division and Role
    let Division = division.charAt(0).toUpperCase() + division.slice(1);
    let Role = role.charAt(0).toUpperCase() + role.slice(1);




//Associates the Participant and Score models to get scores that can be rendered to results page
    Participant.find({ division: division, role: role }).populate("scores").exec(function(err, partDoc) {
        if (err) {
            console.log(err);
        } else {
            // console.log('bib_number', partDoc[0].bib_number, partDoc[0].scores[0].bib_number)
            // console.log('score', partDoc[0].scores[0].score);
            // console.log('partDoc', partDoc[0]);
            let results = partDoc.map(ArrangeMongooseData);
            console.log('results', results);
            
            res.render('prelimResults', { division: Division, role: Role, scores: results, round: round });
        }
    });

    // db.Score.findAll({
    //     where: {
    //         round: round,
    //         division: division
    //     },
    //     include: [
    //         { model: db.Participant }
    //     ]
    // }).then((data) => {

    //     // select the data for which participated in the given role
    //     var scores = getRole(data, role);

    //     // get participants
    //     var participants = getParticipantScores(scores);

    //     // Order participants by Total
    //     participants = orderObjByKey(participants, "total");

    //     res.render('prelimResults', { division: Division, role: Role, scores: participants, round: round });

    // });

});

function ArrangeMongooseData(partDoc, index) {
    // console.log('AMD', JSON.stringify(partDoc.scores, null, 2)); 
    let scoresArray = partDoc.scores.map(function(array){
        return array.score
    });

    var dancer = {
        bib_number: partDoc.bib_number,
        name: partDoc.firstname + " " + partDoc.lastname,
        total: partDoc.scores.reduce(getTotal, 0),
        judge1: scoresArray[0],
        judge2: scoresArray[1],
        judge3: scoresArray[2]
    }
    return dancer;
}

function getTotal(total, scores) {
    return total + scores.score;
}







// Search through an array of objects and find the index of the value
function findIndex(array, value) {

    for (var i = 0; i < array.length; i++) {

        var object = array[i];
        // var index = Object.values(array[i]).indexOf(value);
        for (var key in object) {
            if (object[key] == value)
                return i;
        }
    }
    return -1;
}


// This function reads all of the scores and creates an array of the dancers with each of their scores
function getParticipantScores(scores) {

    var participants = [];

    for (var i = 0; i < scores.length; i++) {

        // find the index of the particular bib_number in the participants array
        var index = findIndex(participants, scores[i].bib_number);
        var judge = "judge" + scores[i].judge;
        var score = scores[i].score;

        // Create a new dancer if the dancer has not been added to the list
        if (index == -1) {
            var dancer = {
                bib_number: scores[i].bib_number,
                name: scores[i].Participant.firstname + " " + scores[i].Participant.lastname,
                [judge]: score,
                total: score,

            }
            participants.push(dancer);
        }

        // Only add the judge score to the proper index
        else {
            participants[index][judge] = score;

            //  Add the new judge's score to the total
            participants[index].total += score;
        }

    } // End of loop

    return participants;
}

function getRole(data, role) {
    var scores = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].Participant.role == role) {
            scores.push(data[i]);
        }
    }
    return scores;
}


function orderObjByKey(array, key) {
    array.sort(function(a, b) { return a.total - b.total; });
    return array;
}

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
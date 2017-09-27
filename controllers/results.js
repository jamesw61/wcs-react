var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require("../models/user.js");
var Participant = require("../models/participant.js");
var Score = require("../models/score.js");

//Gets judge scores and sends them to the results component
router.get("/:round/:division/:role", function(req, res) {

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
            // console.log('bib_number', partDoc[0].firstname, partDoc[0].scores[0].bib_number)
            // console.log('score', partDoc[0].scores[0].score);
            // console.log('partDoc', partDoc[0]);
            // console.log('before function',partDoc[0])
            // console.log("Firstname:",partDoc[0].division)
            let results = partDoc.map(ArrangeMongooseData);
            // console.log('partDoc', partDoc);
            res.json(results);
            
        }
    });



});

function ArrangeMongooseData(partDoc, index) {
    // console.log('AMD', JSON.stringify(partDoc.scores, null, 2)); 
    let scoresArray = partDoc.scores.map(function(array){
        return array.score
    });
    // console.log('length',scoresArray.length);
    // console.log('partDoc', partDoc);
    // var name = partDoc.firstname
    // console.log(name);
    let dancer = {
        bib_number: partDoc.bib_number,
        name: partDoc.firstname + " " + partDoc.lastname,
        total: partDoc.scores.reduce(getTotal, 0),
        judge1: scoresArray[0],
        judge2: scoresArray[1],
        judge3: scoresArray[2]
    }
    // console.log('dancer', dancer);

    //This should be in the post but it updates the total score to a participant
    if (scoresArray.length <= 3) {
    	Participant.findOneAndUpdate({ "bib_number": partDoc.bib_number }, { "total": dancer.total })
                    .exec(function(BaconErr, BaconDoc) {
                        if (BaconErr) {
                            console.log('update total err' + BaconErr);
                        } else {
                            // res.send("posted");

                            // console.log('Total updated');
                        }
                    });

    }
    
    return dancer;
}

function getTotal(total, scores) {
    return total + scores.score;
}





module.exports = router;

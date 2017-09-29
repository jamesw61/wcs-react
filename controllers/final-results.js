var express = require('express');
var router = express.Router();
var passport = require('passport');
var Final = require("../models/final.js");
var Participant = require("../models/participant.js");
var RelativePlacement = require('relative-placement-js');


router.get("/:division", function(req, res) {
    console.log('inside final-results get');
    let division = req.params.division;
    console.log('division', division);
    Final.find({ division: division }).exec(function(err, finalResults) {
        if (err) {
            console.log(err);
        }

        // TODO:  Create a function here that will check if the contest is done
        else {
            // console.log('finalResults', finalResults); 
            // console.log('results length:', finalResults.length); 
            // res.json(finalResults);

            // Get the list of the leaders, followers and judges from the final Results
            // The leads and follows that are paired together have the same index
            // contestPeople = {judges: [], leads: [], follows: []}
            var contestPeople = getPeople(finalResults);
            var leads = contestPeople.leaders;

            var follows = contestPeople.followers;

            var candidates = contestPeople.leaders.sort();


            getVotes(contestPeople.judges, division, function(votes) {

                var results = getPlacement(candidates, votes);

                var data = {
                    division: division,
                    judges: contestPeople.judges,
                    finalPlacement: {}
                }

                for (var i = 0; i < results.length; i++) {
                    // console.log(leads);
                    // console.log(follows);
                    var follower = getFollower(results[i], leads, follows);
                    data.finalPlacement[i + 1] = [results[i], follower];
                }
                console.log(data);
               res.json(data);
                // console.log('---', data.finalPlacement);
              



            });

        }
    });
});

module.exports = router;




function getPeople(finalResults) {

    // Create an object with an array of leaders which will be the contestants
    var people = {
        judges: [],
        leaders: [],
        followers: []
    };

    var leaders = [];

    for (var i = 0; i < finalResults.length; i++) {

        // Check to see if the leader has been added to the object, if not
        // then add the leader and the follower to the array
        if (people.leaders.indexOf(finalResults[i].lead) < 0) {
            people.leaders.push(finalResults[i].lead);
            people.followers.push(finalResults[i].follow);
        }

        // Add the judge if it has not yet been added to the array of judges in the people object
        if (people.judges.indexOf(finalResults[i].judge) < 0) {
            people.judges.push(finalResults[i].judge);
        }
    }

    return people;
}

// Input judges = [judge1, judge2, judge3, judge4]
// division = 'novice'
// Searches the database for the scores given by the judge and returns the following object
// as votes
// { judge1: [101, 103, 105], judge2: [105, 101, 103]}
function getVotes(judges, division, callback) {

    var votes = [];

    for (var judge in judges) {
        // Search the database by judge and sort the data by place
        Final.find({ division: division }).where({ judge: judges[judge] }).sort('place').exec(function(error, judgeData) {

            var vote = [];

            for (var i = 0; i < judgeData.length; i++) {
                vote.push(judgeData[i].lead);
            }

            votes.push(vote);

            if (votes.length === judges.length) {
                // console.log('judge', judge);
                // console.log('judges', judges);
                // console.log('bacon', i, judgeData.length);
                console.log('votes.length', votes.length);

                callback(votes);
            }
        });
    }

}

// This function takes in a list of candidates along with the 
function getPlacement(candidates, votes) {

    var RelativePlacement = require('relative-placement-js');

    var contest = new RelativePlacement();

    contest.addCandidates(candidates);

    contest.addVotes(votes);

    var result = contest.getResult();
    // console.log(result);

    return result;
}

//  The follow has the same index as the lead
function getFollower(bib, lead, follow) {

    // console.log("inside getFollower");
    // console.log(lead);
    // console.log(bib);

    return follow[lead.indexOf(bib)];

}
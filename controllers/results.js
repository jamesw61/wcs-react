var express = require('express');
var router = express.Router();
var passport = require('passport');




router.get("/results/:round/:division/:role", function(req, res) {

	var division = req.params.division;
  	var round = req.params.round;
  	var role = req.params.role;

  	console.log(division);
  	db.Score.findAll({
  		where: {
  			division: division, 
  			round: round
  		}
  		}).then((results) => {
  			console.log(results);
  		});
  	

  	Contest.joinTablesByDiv(table1, table2, division, function(err, scores) {

  		// get participants
		var participants = [];

  		for(var i = 0; i < scores.length; i++) {

  			// find the index of the particular bib_number in the participants array
			var index = findIndex(participants, scores[i].bib_number);
			var judge = "judge" + scores[i].judge;
			var score = scores[i].score;

			// Create a new dancer if the dancer has not been added to the list
			if(index == -1) {
				var dancer = {
					bib_number: scores[i].bib_number,
					name: scores[i].firstname + " " + scores[i].lastname,
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

  		// Order participants by Total
  		participants = orderObjByKey(participants, "total");

  		res.render('prelimResults', {division: division, role: role, scores: participants, round: round});
  	}); 

});


var express = require('express');
var router = express.Router();
var Participant = require("../models/participant.js");



router.get('/participants', function(req, res) {
    console.log(req.body);
});

router.post('/particpants', function(req, res){
    Participant.save(req.body, (err, result) => {
        if (err) return console.log(err)   
    console.log("error " + req.body);
   
    })
    console.log('Did it Work? ' + req.body);
});
        
       
module.exports = router;

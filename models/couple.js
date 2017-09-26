
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var CoupleSchema = new Schema({
  lead: {
    type: String
  },
  follow: {
    type: String
  },
  division: {
    type: String
  },
  total: {
    type: Number
  },
  place: [{
    type: Number
  }]
});


var Couple = mongoose.model("Couple", CoupleSchema);

module.exports = Couple;
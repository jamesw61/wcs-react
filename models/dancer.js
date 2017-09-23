
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var DancerSchema = new Schema({
  lastName: {
    type: String
  },
  firstName: {
    type: String
  },
  division: {
    type: String
  },
  role: {
    type: String
  },
  bib_number: {
    type: String
  },
  scores: [{
    type: Schema.Types.ObjectId,
    ref: "Score"
  }]
});


var Dancer = mongoose.model("Dancer", DancerSchema);

module.exports = Dancer;
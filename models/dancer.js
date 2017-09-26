
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;



var DancerSchema = new Schema({
  lastname: {
    type: String
  },
  firstname: {
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
  total: {
    type: Number
  },
  scores: [{
    type: Schema.Types.ObjectId,
    ref: "Score"
  }]
});


var Dancer = mongoose.model("Dancer", DancerSchema);

module.exports = Dancer;
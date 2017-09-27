'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
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

var Participant = mongoose.model('Participant', ParticipantSchema);

module.exports = Participant;















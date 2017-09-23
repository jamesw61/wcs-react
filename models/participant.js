'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ParticipantSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
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
  scores: [{
    type: Schema.Types.ObjectId,
    ref: "Score"
  }]
});

var Participant = mongoose.model('Participant', ParticipantSchema);

module.exports = Participant;











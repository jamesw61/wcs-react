var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  bib_number: {
    type: String
  },
  division: {
    type: String
  },
  round: {
    type: String
  },
  judge: {
    type: String
  },
  score: {
    type: Number
  },
  role: {
    type: String
  }
});

var Score = mongoose.model("Score", ScoreSchema);

module.exports = Score;


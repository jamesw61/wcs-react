var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FinalSchema = new Schema({
  place: {
    type: Number
  },
  division: {
    type: String
  },  
  judge: {
    type: String
  },
  lead: {
    type: String
  },
  follow: {
    type: String
  }
});

const Final = mongoose.model("Final", FinalSchema);

module.exports = Final;


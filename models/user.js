
'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
// Creates the User table in the database
// module.exports = function(sequelize, DataTypes) {
//   var User = sequelize.define('User', {
//     firstname: DataTypes.STRING,
//     lastname: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.TEXT
//   });

//   return User;
// };








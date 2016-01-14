var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our beer schema
var UserSchema   = new Schema({
  username: {type: String, require: true, unique: true},
  email:    {type: String, require: true, unique: true},
  password: {type: String, require: true}
})


//Set the Model
var User = mongoose.model('User', UserSchema)

module.exports = User


// todo: hash the password
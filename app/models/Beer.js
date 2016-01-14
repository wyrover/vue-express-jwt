var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Define our beer schema
var BeerSchema   = new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  quantity: {type: Number, required: true}
})



//Set the Model
var Beer = mongoose.model('Beer', BeerSchema)

module.exports = Beer

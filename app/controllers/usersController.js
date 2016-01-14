// Load required packages
var User = require('../models/User')




// Create endpoint /api/users for POSTS
exports.postUsers = function(req, res)
{
  // Create a new instance of the Beer model
  var user = new User();

  // Set the beer properties that came from the POST data
  user.username = req.body.username
  user.email = req.body.email
  user.password = req.body.password

  // Save the beer and check for errors
  user.save(function(err)
  {
    if (err) res.send(err);

    res.json({ success: true, message: 'Thx for registering to the application', data: user });
  });
}

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  // Use the Beer model to find all beer
  User.find(function(err, users) {

    if (err) res.send(err)

    res.json(
      {
        success: true,
        message: 'Here is a list with all the users',
        data: users
      })
  })
}

// Create endpoint /api/users/:user_id for GET
exports.getUser = function(req, res)
{
  // Use the Beer model to find a specific beer
  User.findById(req.params.user_id, function(err, user)
  {

    if (err) res.send(err)

    res.json(
      {
        success: true,
        message: 'Here is the user',
        data: user
      })
  })
}

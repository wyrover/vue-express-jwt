var User = require('../models/User')
var jwt  = require('jsonwebtoken')
var config = require('../../config')

// Create endpoint /api/users for POSTS
exports.postRegister = function(req, res)
{
  res.json({message: 'register for a new acount...'})
}


// Create endpoint /api/users for POSTS
exports.postLogin = function(req, res)
{
  // find the user
  User.findOne({username: req.body.username}, function( error, user)
  {
    if ( error ) throw error

    if (!user)
    {
      res.status(422).send({ success: false, message: 'there is no user with this username' })
    }
    else if ( user )
    {
      // check for password mach
      if (user.password !== req.body.password)
      {
        res.status(422).send({success: false, message: 'Incorect Password'})
      } else {
        // Create a token for the user
        var token = jwt.sign(user, config.secret, {
          expiresIn:  60 * 60 * 24 /** 24 hours */
        })
        // and send it
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
          profile: JSON.stringify(user, ['_id', 'username', 'email'])
        })
      }
    }
  })
}
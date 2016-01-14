var express = require('express')
var router = express.Router()

var authController  = require('../controllers/authController')

/* Login to the app. */
router.get('/', function(req, res, next) {
  res.send('you hit the get auth');
});

// Create endpoint handlers for /users
router.route('/login')
  .post(authController.postLogin)
router.route('/register')
  .post(authController.postRegister)


module.exports = router;

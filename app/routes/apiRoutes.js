var express = require('express')
var router  = express.Router()

var config  = require('../../config')
var jwt     = require('express-jwt')


var beersController = require('../controllers/beersController')
var usersController = require('../controllers/usersController')
/*
 * GET http://localhost:8080/api
 *
 */

var jwtCheck = jwt({
  secret: config.secret
});

router.get('/', function(req, res, next) {
  res.json({ success: true, message: 'you listen on the coolest api of the MUNDO' });
});

// Create endpoint handlers for /beers
router.route('/beers')
  .get(jwtCheck, beersController.getBeers)
  .post(beersController.postBeers)

// Create endpoint handlers for /beers/:beer_id
router.route('/beers/:beer_id')
  .get(beersController.getBeer)
  .put(beersController.putBeer)
  .delete(beersController.deleteBeer)




// Create endpoint handlers for /users
router.route('/users')
  .get(usersController.getUsers)
  .post(usersController.postUsers)

// Create endpoint handlers for /users/:user_id
router.route('/users/:beer_id')
// .get(beersController.getBeer)
// .put(beersController.putBeer)
// .delete(beersController.deleteBeer);









module.exports = router;


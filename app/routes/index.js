var express = require('express');
var router = express.Router();

var User = require('../models/User')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/create-user', function(req, res, next) {
  var user = new User({
  	username: 'Admin',
  	email: 'admin@example.com',
  	password: 'password'
  })

  user.save( function(err, doc) {
  	if(err) {console.error(err)}
  	res.send({success:true, message:'A demo user has been created'})	
  })
});



module.exports = router;

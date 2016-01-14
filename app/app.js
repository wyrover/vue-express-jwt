var express    = require('express')
var path       = require('path')
var logger     = require('morgan')
var bodyParser = require('body-parser')
var mongoose   = require('mongoose')


var routes     = require('./routes/index')
var apiRoutes  = require('./routes/apiRoutes')
var authRoutes = require('./routes/auth')

var app = express();

// =======================
// configuration =========
// =======================
var configFile = require('../config')
if ( app.get('env') === 'development' ) {
  database = configFile.localDB
  console.log( "We use a local db connection" )
} else {
  database = configFile.database
}

mongoose.connect(database) // connect to database

app.set('superSecret', configFile.secret) // secret variable
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(require('stylus').middleware(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../public')))


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', routes);
app.use('/api', apiRoutes);
app.use('/auth', authRoutes)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

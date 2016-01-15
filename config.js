module.exports = {

  'secret': 'thisIsArandomStringForOurProtection',
  'localDB': 'mongodb://localhost/localDB',
  'serverDB': 'mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/'

};
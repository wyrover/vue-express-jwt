import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import App from './views/App.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'



import auth from './auth'

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
auth.checkAuth()



export var router = new VueRouter()

// Set up routing and match routes to components
router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/signup': {
    //component: Signup
  }
  //'secretquote': {
  //    component: SecretQuote
  //},
  //'/signup': {
  //    component: Signup
  //}
})

// Redirect to the home route if any routes are unmatched
router.redirect({
    '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')

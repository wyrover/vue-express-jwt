import {router} from '../main'

const API_URL = 'http://localhost:3000/'
const LOGIN_URL = API_URL + 'auth/login/'
const SIGNUP_URL = API_URL + 'auth/register'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect)
  {
    context.$http.post(LOGIN_URL, creds)
      .then( function( response )
      {
        localStorage.setItem('id_token', response.data.token)
        localStorage.setItem('profile', response.data.profile)
        
        this.user.authenticated = true
        this.user.profile =
            JSON.parse(localStorage.getItem('profile'))

        if(redirect) router.go(redirect)

      }.bind(this), function( response ) {
        context.error = response.data.message
      })
  },

  signup(context, creds, redirect) 
  {
    context.$http.post(SIGNUP_URL, creds, (data) => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }

    }).error((err) => {
      context.error = err
    })
  },

  logout()
  {
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    this.user.authenticated = false
    this.user.profile = {}
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    var profile =
        JSON.parse(localStorage.getItem('profile'))
    
    if(jwt) {
      this.user.authenticated = true
      this.user.profile = profile
    }
    else {
      this.user.authenticated = false
      this.user.profile = {}
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

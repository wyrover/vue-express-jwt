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
        if ( response.data.success === false ) context.error = response.data.message

        else
        {
          localStorage.setItem('id_token', response.data.token)
          this.user.authenticated = true

          if(redirect) router.go(redirect)
        }

      }.bind(this))
  },

  signup(context, creds, redirect) {
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
    alert('try to logout')
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

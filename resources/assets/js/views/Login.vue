<template lang="jade">
 div
   h1 {{title}}
   p {{message}}

 div.Form--Wrapper
  form(action="auth/login", method="POST" ,@submit.prevent="login")
    div
      label(for="usernameInput") Username:
      input#usernameInput(type="text" name="username", v-model="credentials.username", require)
    div
      label(for="passwordInput") Password:
      input#passwordInput(type="password" name="password", v-model="credentials.password", require)
    input(type="submit" value="login")

  div(v-if="error")
    p {{error}}
</template>




<script lang="babel">

import auth from '../auth'

export default
{
  name: 'home-view',

  data: function() {
    return {
      title: 'login to superApp',
      message: 'the best app of the world...',
      credentials: {
        username: '',
        password: ''
      },
      error: ''

    }
  },

  methods: {

    login: function() {
      var credentials = {
        username: this.credentials.username,
        password: this.credentials.password
      }
      auth.login(this, credentials, 'home')
    }
  }

}

</script>
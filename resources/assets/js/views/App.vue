<template lang="jade">
  nav
    div.container
      ul
        li
          a(v-link="'home'") Home
        li(v-if="!user.authenticated")
          a(v-link="'signup'") Sign Up
        li(v-if="!user.authenticated")
          a(v-link="'login'") Login
        li(v-if="user.authenticated")
          a(v-link="'logout'", @click="logout") Logout

  div.container
    router-view

</template>

<script>
  import auth from '../auth'

  export default
  {
    data: function() {
      return {
        user: auth.user
      }
    },

    methods: {
      logout: function() {
        auth.logout()
      }
    }
  }
</script>
<template lang="jade">
 div
   h1 {{title}}
   p(v-if="user.authenticated") welcome back {{user.profile.username}} 2 {{message}}
   p(v-else) {{message}}
   pre {{$data|json}}
</template>




<script lang="babel">

import auth from '../auth'

export default
{
  name: 'home',

  data() {
    return {
      title: 'superApp',
      message: 'the best app of the world...',
      user: auth.user
    }

  }
}

</script>
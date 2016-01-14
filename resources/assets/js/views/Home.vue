<template lang="jade">
 div
   h1 {{title}}
   p {{message}}
</template>




<script lang="babel">

export default
{
  name: 'Home-View',

  data() {
    return {
      title: 'superApp',
      message: 'the best app of the world...'
    }

  }
}

</script>
<template>
    <div>
        <h1>Usersasdf{{ userId }}</h1>

    </div>
</template>
<script>
export default {
  computed: {
    userId () {
      return this.$route.params.id
    }
  },
  created () {
    console.log('router', this.$router)
    console.log('route', this.$route)
  }
}
</script>

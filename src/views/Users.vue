<template>
    <div>
        <h1>User</h1>
        <p>유저 번호 {{ userId }}</p>
        <p>그룹 {{ $route.query.group }}</p>
        <p>카테고리 {{ $route.query.category }}</p>
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

<template>
  <div class="error">
    <p>
      <button @click="go">前进</button>
      <button @click="back">后退</button>
      <button @click="goHome">回到首页</button>
    </p>
    <img src="../assets/404.jpg" alt="404">
  </div>
</template>
<script>
export default {
  name: 'error',
  methods: {
    go () {
      this.$router.go(1)
    },
    back () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.error img {
  width: 100%;
  height: 100%;
}
</style>

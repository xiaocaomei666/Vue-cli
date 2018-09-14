<template>
  <div class="error">
    <component-a :changeName="changeNameA"></component-a>
    <p>
      <button @click="go">前进</button>
      <button @click="back">后退</button>
      <button @click="goHome">回到首页</button>
      <button @click="changeParams">改变参数</button>
    </p>
    <component-a :changeName="changeNameB"></component-a>
    <img src="../assets/404.jpg" alt="404">
  </div>
</template>
<script>
import componentA from './componentA.vue'
export default {
  name: 'error',
  components: {
    componentA
  },
  data () {
    return {
      changeNameA: '我是第一个组件A要穿传递的参数',
      changeNameB: '我是参数2'
    }
  },
  methods: {
    changeParams () {
      this.changeNameA = '我改变了参数1'
    },
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

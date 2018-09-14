<template>
  <div class="component-a">
    <span>我是a组件的内容</span>
    <span>{{changeName}}</span>
  </div>
</template>
<script>
export default {
  name: 'componentA',
  props: {
    changeName: {
      type: String,
      default: '我是默认的'
    }
  },
  data () {
    return {
      msg: 'Welcome to a'
    }
  },
  watch: {
    changeName (newV, oldV) {
      console.log(newV, oldV)
    }
  }
}
</script>
<style scoped>
</style>

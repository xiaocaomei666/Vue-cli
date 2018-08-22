<template>
  <div class="html">
    <p>开始html和css的学习哦</p>
    <span>
      <router-link to="/toHome/alias别名跳转到首页/123456789" class="sp-link">alias别名跳转到首页 || </router-link>
    </span>
    <span>
      <router-link to="/goDir/重定向路由跳转/就是我从html跳过去的" class="sp-link">回到学习目录</router-link>
    </span>
  </div>
</template>
<script>
export default {
  name: 'htmlLearn'
}
</script>
<style scoped>
</style>

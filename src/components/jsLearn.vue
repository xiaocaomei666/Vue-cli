<template>
  <div class="jsLearn">
      <p>开始js的学习哦</p>
      <span>
        <router-link to="/goHome" class="sp-link">回到首页 ||</router-link>
      </span>
      <span>
        <router-link to="/goDir/重定向路由跳转/就是我从js跳过去的" class="sp-link">回到学习目录</router-link>
      </span>
  </div>
</template>
<script>
export default {
  name: 'jsLearn'
}
</script>
<style scoped>
</style>

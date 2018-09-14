<template>
  <div class="error">
  <!-- <embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=w0027t1s4vw&auto=0" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed> -->

    <iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=w0027t1s4vw&tiny=0&auto=0" allowfullscreen></iframe>

    <video id="video"
              width="100%"
              height="400"
              poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535624340795&di=7536cc6e2f79e9985f2221c499d1e8a4&imgtype=0&src=http%3A%2F%2Fliaocheng.dzwww.com%2Fgnxw%2F201807%2FW020180713592210532639.jpg"
              src="http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L" controls="true" webkit-playsinline="true" playsinline="true"></video>
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

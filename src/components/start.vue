<template>
  <div class="start">
  <div class="loader-inner ball-pulse">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <div class="loader-inner ball-grid-pulse">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
  </div>

  <hr>
     <!-- <span><router-link to="/start/jsLearn" class="sp-link">js</router-link></span>
      <span> || </span>
      <span><router-link to="/start/htmlLearn" class="sp-link">html和css</router-link></span> -->

      <span>
        <router-link :to="{name:'start / jsLearn',params:{userName:'小草莓js'}}" class="sp-link">js</router-link>
      </span>
      <span> || </span>
      <span>
        <router-link :to="{name:'start / htmlLearn',params:{userName:'小草莓HTML&&CSS'}}"  class="sp-link">html和css</router-link>
      </span>
      <span> || </span>
      <span>
        <router-link :to='"/home/" + user + "/18813299693"' class="sp-link">回到首页</router-link>
      </span>
      <h3 v-if="$route.params.userName">作者：{{$route.params.userName}}</h3>
      <h4 v-if="$route.params.hobby">爱好：{{$route.params.hobby}}</h4>
      <button @click="go">前进</button>
      <transition name="fade">
        <router-view></router-view>
      </transition>

  </div>
</template>
<script>
export default {
  name: 'start',
  data () {
    return {
      user: 'url传递参数'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('路由进入啦', to, from)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('路由离开啦', to, from)
    next()
  },
  methods: {
    go () {
      this.$router.go(1)
    }
  }
}
</script>
<style scoped>
.start {
  background-color: #008c96;
}
</style>

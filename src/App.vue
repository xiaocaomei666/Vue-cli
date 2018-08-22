<template>
  <div id="app">
    <img src="./assets/logo.png" alt="vue">
    <p>
      <router-link to="/home/首页欢迎您/8888">
        <span class="sp-link"> 首页 </span>
      </router-link>
      <span> | </span>
      <router-link :to="{name:'start',params:{userName:userName,hobby:hobby}}">
        <span class="sp-link"> 进入学习 </span>
      </router-link>
      <span> | </span>
      <router-link to="/error">
        <span class="sp-link"> 404 </span>
      </router-link>
      <span> | </span>
      <router-link to="/count">
        <span class="sp-link"> vuex </span>
      </router-link>
    </p>
    <p v-if="$route.name">导航：{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <router-view name="left" style="width:50%;height:350px;background:#008C96;float:left"></router-view>
    <router-view name="right" style="width:50%;height:350px;background:pink;float:left"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      userName: '小草莓666',
      hobby: '睡觉觉'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sp-link {
  font-size: 18px;
  color: #008c96;
}
a {
  text-decoration: none;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-acitve {
  transition: opacity .3s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity .3s;
}
</style>

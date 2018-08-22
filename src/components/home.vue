<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.user}} {{$route.params.phone}}</p>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org/"
          target="_blank"
        >
          官网链接(英文)
        </a>
      </li>
      <li>
        <a
          href="https://cn.vuejs.org/"
          target="_blank"
        >
          官网链接(中文)
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org/"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://www.vue-js.com/"
          target="_blank"
        >
          社区讨论
        </a>
      </li>
      <br>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

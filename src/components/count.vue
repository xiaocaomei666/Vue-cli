<template>
  <div>
    小星星的数量 ： {{$store.state.count}} --- {{count1}} --- {{count2}} --- {{count}} --- {{$store.getters.count}} --- {{count5}}
    <p>
      <button @click="$store.commit('add',100)">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <button @click="add(200)">+</button>
      <button @click="reduce">-</button>
      <button @click="addOne">+</button>
    </p>
    <p>小草莓:{{lucky}}</p>
    <p>
       <button @click="addLuckyAction">+</button>
       <button @click="reduceLuckyAciton">-</button>
    </p>
  </div>
</template>
<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default ({
  name: 'count',
  store,
  // 获取state对象的方式
  computed: {
    // 方式一：通过computed的计算属性直接赋值
    count1 () {
      return this.$store.state.count
    },
    // 方式二：通过mapState的对象来赋值
    ...mapState({ count2: (state) => state.count }),
    // 方式三：通过mapState的数组来赋值
    ...mapState(['count', 'lucky']),
    // 获取getters对象
    count5 () {
      return this.$store.getters.count
    },
    ...mapGetters(['count'])
  },
  // 模板获取Mutations方法
  methods: {
    ...mapMutations(['add', 'reduce', 'addOne']),
    ...mapActions(['addLuckyAction', 'reduceLuckyAciton'])
  }
})
</script>

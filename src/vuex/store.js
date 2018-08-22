import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态对象
const state = {
  count: 1,
  lucky: 1
}

// 改变状态对象的方法 同步
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count = state.count - 1
  },
  addOne (state) {
    state.count++
  },
  addLucky (state) {
    state.lucky++
  },
  reduceLucky (state) {
    state.lucky--
  }
}

// 计算过滤
const getters = {
  count (state) {
    state.count -= 1
    return state.count
  }
}

// 改变状态对象的方法 异步
const actions = {
  addLuckyAction (context) {
    context.commit('addLucky')
    setTimeout(() => {
      console.log('我到啦')
      context.commit('reduceLucky')
    }, 5000)
    console.log('我是异步的啦嘻嘻')
  },
  reduceLuckyAciton ({commit}) {
    commit('reduceLucky')
  }
}

export default new Vuex.Store({state, mutations, getters, actions})

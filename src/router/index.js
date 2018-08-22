import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import start from '@/components/start'
import jsLearn from '@/components/jsLearn'
import htmlLearn from '@/components/htmlLearn'
import error from '@/components/error'
import count from '@/components/count'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: home,
        left: jsLearn,
        right: htmlLearn
      }
    }, {
      path: '/home/:user/:phone(\\d+)',
      name: 'home',
      components: {
        default: home,
        left: jsLearn,
        right: htmlLearn
      },
      alias: '/toHome/:user/:phone(\\d+)'
    }, {
      path: '/start/:userName/:hobby',
      component: start,
      name: 'start',
      children: [
        {
          path: 'jsLearn',
          name: 'start / jsLearn',
          component: jsLearn
        }, {
          path: 'htmlLearn',
          name: 'start / htmlLearn',
          component: htmlLearn
        }
      ],
      beforeEnter: (to, from, next) => {
        console.log(to, from)
        next()
      }
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goDir/:userName/:hobby',
      redirect: '/start/:userName/:hobby'
    }, {
      path: '/count',
      component: count,
      name: 'count'
    }, {
      path: '*',
      component: error
    }
  ]
})

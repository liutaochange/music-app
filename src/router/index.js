import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Mine from '@/views/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'recommend',
          component: require('../views/recommend')
        },
        {
          path: 'songList',
          component: require('../views/songList')
        },
        {
          path: 'host',
          component: require('../views/host')
        },
        {
          path: 'rank',
          component: require('../views/rank')
        }
      ]
    },
    {
      path:'/mine',
      name:'Mine',
      component: Mine
    }
  ]
})

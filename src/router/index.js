import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Home from '@/views/Home'
import Mine from '@/views/Mine'
import Fm from '@/views/Fm'
import PlayList from '@/views/PlayList'
import RecSongs from '@/views/Recsongs'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component: Index,
      children:[
        {
          path: '/index',
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
    },
    {
      path:'/fm',
      name:'Fm',
      component: Fm
    },
    {
      path:'/playlist',
      name:'PlayList',
      component: PlayList
    },
    {
      path:'/recsongs',
      name:'RecSongs',
      component: RecSongs
    },
    {
      path:'/login',
      name:'login',
      component: Login
    }
  ]
})

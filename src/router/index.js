import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'
import abouts from '@/pages/abouts'
import aa from '@/pages/aa'
import hsCode from '@/pages/hsCode'
import goods from '@/pages/goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/aa',
      name: 'aa',
      component: aa
    },
    {
      path: '/abouts',
      name: 'abouts',
      component: abouts
    },
    {
      path: '/hsCode',
      name: 'hsCode',
      component: hsCode
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    }
  ]
})

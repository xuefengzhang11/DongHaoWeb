import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import loginregist from '@/pages/loginregist'
import abouts from '@/pages/abouts'
import aa from '@/pages/aa'
import mainBussiness from '@/pages/mainBussiness'
import goods from '@/pages/goods'
import changelanguage from '@/pages/changelanguage'
import custeregist from '@/pages/custeregist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/loginregist',
      name: 'loginregist',
      component: loginregist
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
      path: '/mainBussiness',
      name: 'mainBussiness',
      component: mainBussiness
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/changelanguage',
      name: 'changelanguage',
      component: changelanguage
    },
    {
      path: '/custeregist',
      name: 'custeregist',
      component: custeregist
    },
  ],
  mode:'history'   //去除#号
})

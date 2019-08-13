// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/Nav'

import {post,get,patch,put} from './utils/http'
import api from './utils/api'
import {setCookie, getCookie, delCookie} from './utils/cookie.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'signalr'

//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.url=api;
Vue.prototype.$setCookie=setCookie;
Vue.prototype.$getCookie=getCookie;
Vue.prototype.$delCookie=delCookie;

Vue.use(Nav) // 引用自定义组件
Vue.component('Nav', Nav) // 初始化组件

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App,
    Nav
  },
  template: '<App/>'
})

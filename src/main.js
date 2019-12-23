// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/Nav'
import Bottom from './components/bottom'
import {post,get,patch,put} from './utils/http'
import api from './utils/api'
import {setCookie, getCookie, delCookie} from './utils/cookie.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'


//数据自动更新
import 'signalr'
//语言切换引用包
import VueI18n from 'vue-i18n'
//引入echart绘制世界地图
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import '../node_modules/echarts/map/js/world.js' // 引入世界地图


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
Vue.use(Bottom) // 引用自定义组件
Vue.component('Bottom', Bottom) // 初始化组件

Vue.config.productionTip = false

//引入语言包
Vue.use(VueI18n);
/* eslint-disable no-new */
const i18n = new VueI18n({
  locale: 'ch', // 将要切换的语言，可以通过url拼的参数获取，用户行为select选择获取，本地manifest配置获取等，根据场景动态获取
  messages: {
    'ch': require('./utils/language/ch.js'),  // 本地资源文件，我这里配2个语言，中文&英文，src下根据个人情况放置
    'en': require('./utils/language/en.js')
  }
});

new Vue({
  el: '#app',
  router,
  i18n,
  components: { 
    App,
    Nav,
    Bottom
  },
  template: '<App/>'
})

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);

import './style/common.scss';
import './style/about.scss';
import './style/old.scss';

import dd from './data.js';
Vue.prototype.Common = dd;

//组件注册
import App from './App.vue';
import Index from './views/Index.vue';
import About from './views/about.vue';
import SiteIntro from './views/SiteIntro.vue';
import Member from './views/Member.vue';
import Download from './views/Download.vue';
import Danmaku from './views/Danmaku.vue';

import News from './views/News.vue';
import Works from './views/Works.vue';
import Plan from './views/Plan.vue';
import Goods from './views/Goods.vue';
import FriendLink from './views/Link.vue';

import Status from './views/Status.vue';


//路由信息
const routes = [
  { path: '', component: Index,},
  { path: '/about', component: About },  
  { path: '/intro', component: SiteIntro },
  { path: '/member', component: Member },
  { path: '/download', component: Download },
  { path: '/danmu', component: Danmaku },
  { path: '/news', component: News },
  { path: '/works', component: Works },
  { path: '/dev', component: Plan },
  { path: '/goods', component: Goods },
  { path: '/link', component: FriendLink },
  { path: '/status', component: Status }
]

const router = new VueRouter({
  //mode: 'history',
  routes: routes // (缩写) 相当于 routes: routes
})

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { 
    App
  },
  router: router
}).$mount('#app');
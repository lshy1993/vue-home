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
import Index from './components/Index.vue';
import About from './components/about.vue';
import SiteIntro from './components/SiteIntro.vue';
import Member from './components/Member.vue';
import Download from './components/Download.vue';
import Danmaku from './components/Danmaku.vue';

import News from './components/News.vue';
import Works from './components/Works.vue';
import Plan from './components/Plan.vue';
import Goods from './components/Goods.vue';
import FriendLink from './components/Link.vue';

import Status from './components/Status.vue';


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
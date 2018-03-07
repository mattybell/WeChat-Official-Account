
import Vue from 'vue'
import App from './App'
import store from './store/index'
import $ from 'jquery'
import router from './router/index'
import axios from 'axios'
import '../css/index.css'
import '../css/weui.min.css'
import '../css/animate.css'
import 'font-awesome/css/font-awesome.css'
import '@/store/IDS'
Vue.config.productionTip = false
/* eslint-disable no-new */
const http = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

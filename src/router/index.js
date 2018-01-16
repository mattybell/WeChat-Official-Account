import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
// import link from '../../config/link/location'
const index = () => import('@/pages/index.vue')
const order = () => import('@/pages/order.vue')
const member = () => import('@/pages/member.vue')
const report = () => import('@/pages/report.vue')
const user = () => import('@/pages/user.vue')
const bindWechat = () => import('@/pages/bindWechat.vue')


Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/bindWechat'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/report',
      name: 'report',
      component: report
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/bindWechat',
      name: 'bind-wechat',
      component: bindWechat
    },
  ]
})

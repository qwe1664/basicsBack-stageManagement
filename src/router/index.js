import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'  // 重定向到首页 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home', // 布局页面
    name: 'home',
    redirect: '/index',
    // meta:{title:'首页'},
    component: () => import('../Layout/index.vue'),
    children: [
      {
        path: '/index',  // 首页
        name: 'index',
        meta: { title: '首页' },
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/loan-input', // 贷款申请
        name: 'loan-input',
        meta: { title: '贷款申请' },
        component: () => import('../views/loan-input/index.vue')
      },
      {
        path: '/input-manager', // 申请管理
        name: 'input-manager',
        meta: { title: '申请管理' },
        component: () => import('../views/input-manager/index.vue')
      },
      {
        path: '/loan-approve', // 贷款审批
        name: 'loan-approve',
        meta: { title: '贷款审批' },
        component: () => import('../views/loan-approve/index.vue'),
        children: [
          {
            path: '/loan-approve/first', // 初审
            name: 'first',
            meta: { title: '初审' },
            component: () => import('../views/loan-approve/first.vue')
          },
          {
            path: 'end', // 终审
            name: 'end',
            meta: { title: '终审' },
            component: () => import('../views/loan-approve/end.vue')
          }]
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

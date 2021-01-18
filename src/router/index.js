import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from  '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: { title: 'Login - Software (TH)' }
  },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  //   // meta: { title: 'Admin', requiresAuth: true },
  // },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard - Software (TH)', requiresAuth: true }
  },
  // {
  //   path:'/test',
  //   name: 'test',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/test.vue'),
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

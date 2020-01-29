import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:lang(ru|en)',
    name: 'lang-home',
    component: Home
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  fallback: false,
  base: '/',
  routes
})

export default router

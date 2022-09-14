import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultView'),
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/perfil',
        name: 'PerfilView',
        component: () => import(/* webpackChunkName: "perfil" */ '../views/PerfilView.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/BlankView'),
    children: [
      {
      path: '/login',
      name: 'LoginView',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

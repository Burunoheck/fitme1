import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/BlankView'),
    children: [
      {
      path: '/',
      name: 'LoginView',
      component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
      },
      {
        path: '/cadastro',
        name: 'CadastroView',
        component: () => import(/* webpackChunkName: "cadastro" */ '../views/CadastroView.vue')
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
    component: () => import('@/layouts/DefaultView'),
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: HomeView
      },
      {
        path: '/basal',
        name: 'TaxaBasal',
        component: () => import(/* webpackChunkName: "basal" */ '../views/TaxaBasal.vue')
      },
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

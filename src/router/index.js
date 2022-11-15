import store from '@/store'
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
        name: 'HomeView',
        component: HomeView
      },
      {
        path: '/imc',
        name: 'CalculoImc',
        component: () => import(/* webpackChunkName: "imc" */ '../views/CalculoImc.vue')
      },
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if(!store.state.auth.loggedIn) {
      next({
        name: 'Login'
      })
    } else{
      next()
    }
  } else{
    next()
  }
}
)

export default router
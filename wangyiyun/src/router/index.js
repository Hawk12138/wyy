import { createRouter, createWebHistory } from 'vue-router'
import faxianView from '../views/faxianView.vue'

const routes = [
  {
    path: '/',
    name: 'faxian',
    component: faxianView
  },
  {
    path: '/boke',
    name: 'boke',
    component: () => import('../views/bokeView.vue')
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/wodeView.vue')
  },
  {
    path: '/guanzhu',
    name: 'guanzhu',
    component: () => import('../views/guanzhuView.vue')
  },
  {
    path: '/shequ',
    name: 'shequ',
    component: () => import('../views/shequView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

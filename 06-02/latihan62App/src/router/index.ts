import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import ViewCat from '../views/ViewCat.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/maska'
  },
  {
    path: '/maska',
    name: 'ViewCat',
    component: ViewCat
  },
  {
    path: '/about',
    component: () => import ('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import MaskaHome from '../views/MaskaHome.vue'
import MaskaTentang from '../views/MaskaTentang.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/maska'
  },
  {
    path: '/maska',
    name: 'MaskaHome',
    component: MaskaHome
  },
  {
    path: '/tentang',
    name: 'MaskaTentang',
    component: MaskaTentang
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

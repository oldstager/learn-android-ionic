import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/maska'
  },
  {
    path: '/maska',
    component: () => import ('../views/ViewCat.vue')
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

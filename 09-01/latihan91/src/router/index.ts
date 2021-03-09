import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import InterPlaceHome from '../views/InterPlaceHome.vue'
import InterPlaceTentang from '../views/InterPlaceTentang.vue'
import InterPlaceLogin from '../views/InterPlaceLogin.vue'
import InterPlaceEditUser from '../views/InterPlaceEditUser.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'InterPlaceLogin',
    component: InterPlaceLogin
  },
  {
    path: '/home',
    name: 'InterPlaceHome',
    component: InterPlaceHome
  },
  {
    path: '/editUser',
    name: 'InterPlaceEditUser',
    component: InterPlaceEditUser
  },
  {
    path: '/tentang',
    name: 'InterPlaceTentang',
    component: InterPlaceTentang
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Kamera from '../views/Kamera.vue'
import Geolocation from '../views/Geolocation.vue'
import Geocoder from '../views/Geocoder.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/kamera',
    name: 'Kamera',
    component: Kamera
  },
  {
    path: '/geolocation',
    name: 'Geolocation',
    component: Geolocation 
  },
  {
    path: '/geocoder',
    name: 'Geocoder',
    component: Geocoder
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

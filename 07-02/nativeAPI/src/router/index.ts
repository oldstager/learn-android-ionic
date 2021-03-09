import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Kamera from '../views/Kamera.vue'
import AppRate from '../views/AppRate.vue'
import SocialSharing from '../views/SocialSharing.vue'
import Geolocation from '../views/Geolocation.vue'
import Geocoder from '../views/Geocoder.vue'
import Sms from '../views/Sms.vue'
import CallPhoneNumber from '../views/CallNumber.vue'

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
    path: '/apprate',
    name: 'AppRate',
    component: AppRate
  },
  {
    path: '/socialsharing',
    name: 'SocialSharing',
    component: SocialSharing
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
  },
  {
    path: '/sms',
    name: 'Sms',
    component: Sms
  },
  {
    path: '/callnumber',
    name: 'CallPhoneNumber',
    component: CallPhoneNumber
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

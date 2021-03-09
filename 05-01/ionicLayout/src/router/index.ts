import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
//import HomeSinglePage from '../views/HomeSinglePage.vue'
//import HomeTabs from '../views/HomeTabs.vue'
//import HomeMenu from '../views/HomeMenu.vue'
//import HomeSplitPane from '../views/HomeSplitPane.vue'
import HomeResponsiveGrid from '../views/HomeResponsiveGrid.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    //component: HomeSinglePage
    //component: HomeTabs
    //component: HomeMenu
    //component: HomeSplitPane
    component: HomeResponsiveGrid
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
//import Home from '../views/Home.vue'
//import HomeActionSheet from '../views/HomeActionSheet.vue'
//import HomeAlert from '../views/HomeAlert.vue'
//import HomeBadge from '../views/HomeBadge.vue'
//import HomeButton from '../views/HomeButton.vue'
//import HomeCard from '../views/HomeCard.vue'
//import HomeCheckBox from '../views/HomeCheckBox.vue'
//import HomeDateTime from '../views/HomeDateTime.vue'
//import HomeGesture from '../views/HomeGesture.vue'
//import HomeInput from '../views/HomeInput.vue'
//import HomeList from '../views/HomeList.vue'
//import HomeLoading from '../views/HomeLoading.vue'
//import HomeModal from '../views/HomeModal.vue'
//import HomeNavigation from '../views/HomeNavigation.vue'
//import HomePopOver from '../views/HomePopOver.vue'
//import HomeRadio from '../views/HomeRadio.vue'
//import HomeRange from '../views/HomeRange.vue'
//import HomeSearchBar from '../views/HomeSearchBar.vue'
//import HomeSegment from '../views/HomeSegment.vue'
//import HomeSelect from '../views/HomeSelect.vue'
//import HomeSlide from '../views/HomeSlide.vue'
//import HomeTab from '../views/HomeTab.vue'
//import HomeToast from '../views/HomeToast.vue'
//import HomeToggle from '../views/HomeToggle.vue'
import HomeToolBar from '../views/HomeToolBar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    //component: Home
    //component: HomeActionSheet
    //component: HomeAlert
    //component: HomeBadge
    //component: HomeButton
    //component: HomeCard
    //component: HomeCheckBox
    //component: HomeDateTime
    //component: HomeGesture
    //component: HomeInput
    //component: HomeList
    //component: HomeLoading
    //component: HomeModal
    //component: HomeNavigation
    //component: HomePopOver
    //component: HomeRadio
    //component: HomeRange
    //component: HomeSearchBar
    //component: HomeSegment
    //component: HomeSelect
    //component: HomeSlide
    //component: HomeTab
    //component: HomeToast
    //component: HomeToggle
    component: HomeToolBar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

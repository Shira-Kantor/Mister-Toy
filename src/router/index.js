import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from './../views/AboutView.vue'
import ToyIndex from './../views/ToyIndex.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/toy',
      name: 'toy',
      component: ToyIndex
    }
  ]
})

export default router

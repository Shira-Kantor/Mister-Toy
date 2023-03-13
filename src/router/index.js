import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from './../views/AboutView.vue'
import ToyIndex from './../views/ToyIndex.vue'
import ToyEdit from './../views/ToyEdit.vue'
import ToyDetails from './../views/ToyDetails.vue'

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
      path: '/toy/edit/:toyId?',
      component: ToyEdit,
      name: 'EditToy',
    },
    {
      path: '/toy/details/:toyId',
      component: ToyDetails,
    },
    {
      path: '/toy',
      name: 'toy',
      component: ToyIndex,
      // children: [
      //   {
      //     path: '/edit/:toyId?',
      //     component: ToyEdit,
      //   },
      //   {
      //     path: '/details/:toyId',
      //     component: ToyDetails,
      //   },
      // ],
    }
  ]
})

export default router

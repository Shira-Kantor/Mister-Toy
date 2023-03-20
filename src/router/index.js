import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from './../views/AboutView.vue'
import ToyIndex from './../views/ToyIndex.vue'
import ToyEdit from './../views/ToyEdit.vue'
import ToyDetails from './../views/ToyDetails.vue'
import  GoogleMap from './../views/GoogleMap.vue'
import  Chart from './../views/Chart.vue'
import  userIndex from './../views/user/userIndex.vue'
import ReviewIndex from './../views/ReviewIndex.vue'
import login from '../views/Login.vue'
import Chat from './../views/Chat.vue'

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
      path: '/map',
      name: 'map',
      component: GoogleMap,
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart,
    },
    {
      path: '/login',
      name: 'login',
      component: login,
  },
    {
      path: '/review',
      name: 'ReviewIndex',
      component: ReviewIndex
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
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
    },
    {
      path: '/user',
      name: 'user',
      component: userIndex
    }
  ]
})

export default router

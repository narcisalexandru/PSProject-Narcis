import { createRouter, createWebHistory } from 'vue-router'
import FlexView from '../views/FlexView.vue'
import GridView from '@/views/GridView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/flex',
      name: 'flex',
      component: FlexView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/grid',
      name: 'grid',
      component: GridView,
    },
  ],
})

export default router

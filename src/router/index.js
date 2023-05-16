import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home/index.vue')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' }
    }
  ]
})

export default router
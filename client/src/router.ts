import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/:id',
      component: () => import('./pages/ID.vue'),
    },
  ]
})

export default router

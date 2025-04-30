import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('@/views/overview/Overview.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/form/Form.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/table/Table.vue'),
    },
  ],
})

export default router

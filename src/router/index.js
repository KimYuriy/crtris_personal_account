import { createRouter, createWebHistory } from 'vue-router'
import InternPage from '@/components/InternPage/InternPage.vue'
import CuratorPage from '@/components/CuratorPage/CuratorPage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: `/`,
      component: InternPage
    },
    {
      path: `/curator`,
      component: CuratorPage
    }
  ]
})
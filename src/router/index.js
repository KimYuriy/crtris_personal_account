import { createRouter, createWebHistory } from 'vue-router'
import InternPage from '@/components/pages/InternPage/InternPage.vue'
import CuratorPage from '@/components/pages/CuratorPage/CuratorPage.vue'
import AuthPage from '@/components/pages/AuthPage/AuthPage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: `/intern`,
      component: InternPage
    },
    {
      path: `/curator`,
      component: CuratorPage
    },
    {
      path: `/`,
      component: AuthPage
    }
  ]
})
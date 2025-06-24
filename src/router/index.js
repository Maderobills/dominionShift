import AchievementView from '@/views/AchievementView.vue'
import GoalsView from '@/views/GoalsView.vue'
import HomeView from '@/views/HomeView.vue'
import PoliciesView from '@/views/PoliciesView.vue'
import TeamView from '@/views/TeamView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/policies',
      name: 'policies',
      component: PoliciesView,
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    ,
    {
      path: '/achievements',
      name: 'achievements',
      component: AchievementView,
    },
  ],
})

export default router

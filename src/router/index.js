import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeConfig from '@/stores/home'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      redirect: '/about',
      component: HomeView,
      children: [
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: {
            title: 'About'
          }
        },
        {
          path: '/experience',
          name: 'experience',
          component: () => import('../views/ExperienceView.vue'),
          meta: {
            title: 'Experience'
          }
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../views/ProjectsView.vue'),
          meta: {
            title: 'Projects'
          }
        },
        {
          path: '/scientific-publications',
          name: 'scientific-publications',
          component: () => import('../views/PublicationsView.vue'),
          meta: {
            title: 'Publications'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | ${HomeConfig.fullName.split(" ")[0]}`
  }
  next()
})

export default router

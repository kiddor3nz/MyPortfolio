import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'
import GuestLayout from '@/Layout/GuestLayout.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import SignupView from '@/views/Auth/SignupView.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'
import AdminLayout from '@/Layout/AdminLayout.vue'
import useUserStore from '@/store/user'
import AdminProjects from '@/views/Admin/AdminProjects.vue'
import AdminAbout from '@/views/Admin/AdminAbout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      component: GuestLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView,
        },
        {
          path: '/project',
          name: 'project',
          component: ProjectView,
        },
        {
          path: '/contact',
          name: 'contact',
          component: ContactView,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: 'home',
          name: 'adminhome',
          component: AdminHome,
        },
        {
          path: 'projects',
          name: 'adminprojects',
          component:AdminProjects
        },
        {
          path: 'about',
          name: 'adminabout',
          component:AdminAbout
        }
      ],
      beforeEnter: async(to, from, next) => {
        try{
          const userStore = useUserStore();
          await userStore.fetchUser();
          next();
        }catch(error){
          console.error('Failed to fetch Data', error);
          next(false)
        }
      }
    }



  ],
})

export default router

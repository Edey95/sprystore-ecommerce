import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import ContactView from '@/views/Contact.vue'
import AboutView from '@/views/About.vue'
import ShopView from '@/views/Shop.vue'

import AdminView from '@/views/Admin/Admin.vue'
import BannerListView from '@/views/Admin/Banners/BannersList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, */
    {
      path: '/admin',
      name: 'dashboard',
      component: AdminView
    },
    {
      path: '/banners',
      name: 'banners',
      component: BannerListView
    },
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import BaseLayout from '@/components/BaseLayout/BaseLayout.vue'
import HomePage from '@/pages/HomePage/HomePage.vue'
import DownloadPage from '@/pages/DownloadPage/DownloadPage.vue'
import ErrorPage from '@/pages/ErrorPage/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: 'home',
        name: 'Layout',
        component: BaseLayout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: HomePage,
            },
            {
              path: 'download',
              name: 'Download',
              component: DownloadPage,
          },
        ],
    },
    {
        path: '*',
        name: 'Error',
        component: ErrorPage,
    },
  ]
})
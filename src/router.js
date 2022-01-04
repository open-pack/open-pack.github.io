import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout/Layout.vue'
import Home from '@/pages/Home/Home.vue'
import Download from '@/pages/Download/Download.vue'
import Error from '@/pages/Error/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: 'home',
        name: 'Layout',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home,
            },
            {
              path: 'download',
              name: 'Download',
              component: Download,
          },
        ],
    },
    {
        path: '*',
        name: 'Error',
        component: Error
    },
  ]
})
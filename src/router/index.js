import Vue from 'vue'
import Router from 'vue-router'
import Toolbox from '@/components/Toolbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toollist',
      component: Toolbox,
      props: true
    },
    {
      path: '/:toolId',
      name: 'details',
      component: Toolbox,
      props: true
    },
    {
      path: '/category/:categorySlug',
      name: 'category',
      component: Toolbox,
      props: true
    }
  ]
})

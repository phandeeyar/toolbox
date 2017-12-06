import Vue from 'vue'
import Router from 'vue-router'
import ToolList from '@/components/ToolList'
import ToolDetail from '@/components/ToolDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toollist',
      component: ToolList
    },
    {
      path: '/:toolId',
      name: 'details',
      component: ToolDetail
    }
  ]
})

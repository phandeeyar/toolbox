// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TableTop from '../node_modules/tabletop/src/tabletop.min.js'
import BootstrapVue from 'bootstrap-vue'
import { routerHistory, writeHistory } from 'vue-router-back-button'

Vue.config.productionTip = false
Vue.prototype.$tabletop = TableTop
Vue.use(BootstrapVue)
Vue.use(routerHistory)

router.afterEach(writeHistory)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

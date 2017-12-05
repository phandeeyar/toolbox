// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import TableTop from '../node_modules/tabletop/src/tabletop.min.js'

Vue.config.productionTip = false
Vue.prototype.$tabletop = TableTop

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

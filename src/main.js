// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueMaterial from 'vue-material'
// import './assets/theme.scss'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})

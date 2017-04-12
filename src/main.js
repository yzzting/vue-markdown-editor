import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'

import store from './vuex/store'


Vue.config.productionTip = false

Vue.use(VueMaterial)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

import Vue from 'vue'
import Electron from 'vue-electron'
import VueMaterial from 'vue-material' 
import App from './App'
import store from './vuex/store'

Vue.use(Electron)

Vue.use(VueMaterial)


Vue.material.registerTheme({
  default: {
    primary: {
      color: 'red',
      hue: 600
    },
  }
})

Vue.config.debug = true

/* eslint-disable no-new */
new Vue({
  ...App,
  store
}).$mount('#app')

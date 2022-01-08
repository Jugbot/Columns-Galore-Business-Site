import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import store from './store'

Vue.config.productionTip = false

Vue.mixin({
  computed: {
    $yearsSinceFounding () {
      return new Date().getUTCFullYear() - 1990
    }
  }
})

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')

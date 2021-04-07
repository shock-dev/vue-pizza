import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMeta, { refreshOnceOnNavigation: true })

// Directives
import './directives/vClickOutside'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

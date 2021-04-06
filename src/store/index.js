import Vue from 'vue'
import Vuex from 'vuex'

import filters from '@/store/modules/filters'
import pizza from '@/store/modules/pizza'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filters,
    pizza
  }
})

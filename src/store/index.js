import Vue from 'vue'
import Vuex from 'vuex'

import categories from '@/store/modules/categories'
import sort from '@/store/modules/sort'
import products from '@/store/modules/products'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    sort,
    products,
    cart
  }
})

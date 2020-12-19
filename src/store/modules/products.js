import { getProducts } from '@/services/product.service'

export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setItems(state, data) {
            state.items = data
        }
    },
    actions: {
        async fetchItems({commit}) {
            try {
                const products = await getProducts()
                commit('setItems', products)
            } catch (e) {
                console.log(e)
            }
        }
    },
    getters: {
        items: ({items}) => items
    }
}

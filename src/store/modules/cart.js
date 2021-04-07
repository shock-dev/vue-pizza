export default {
    namespaced: true,

    state: {
        cart: {},
        totalPrice: 0,
        totalCount: 0
    },

    mutations: {
        setPizza(state, { id, pizza }) {
            if (!state.cart[id]) {
                return state.cart[id] = [pizza]
            }
            state.cart[id] = [...state.cart[id], pizza]
        },

        plusTotalPrice(state, price) {
            state.totalPrice += price
        },

        plusTotalCount(state) {
            state.totalCount++
        }
    },

    actions: {
        plusPizza({ commit }, { id, pizza }) {
            commit('setPizza', { id, pizza })
            commit('plusTotalPrice', pizza.price)
            commit('plusTotalCount')
        }
    },

    getters: {
        totalPrice: ({ totalPrice }) => totalPrice,
        totalCount: ({ totalCount }) => totalCount
    }
}

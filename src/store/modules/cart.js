export default {
    namespaced: true,

    state: {
        cart: {},
        totalPrice: 0,
        totalCount: 0
    },

    mutations: {
        setPizza(state, pizza) {
            const { id } = pizza

            if (!state.cart[id]) {
                return state.cart[id] = [pizza]
            }
            state.cart[id] = [...state.cart[id], pizza]
        },

        unsetPizza(state, id) {
            state.cart[id].splice(state.cart[id].length - 1, 1)
        },

        plusTotalPrice(state, price) {
            state.totalPrice += price
        },

        minusTotalPrice(state, price) {
            state.totalPrice -= price
        },

        plusTotalCount(state) {
            state.totalCount++
        },

        minusTotalCount(state) {
            state.totalCount--
        }
    },

    actions: {
        plusPizza({ commit }, pizza) {
            commit('setPizza', pizza)
            commit('plusTotalPrice', pizza.price)
            commit('plusTotalCount')
        },

        minusPizza({ commit, state }, pizza) {
            if (state.cart[pizza.id].length > 1) {
                commit('unsetPizza', pizza.id)
                commit('minusTotalPrice', pizza.price)
                commit('minusTotalCount')
            }
        }
    },

    getters: {
        cart: ({ cart }) => cart,
        totalPrice: ({ totalPrice }) => totalPrice,
        totalCount: ({ totalCount }) => totalCount
    }
}

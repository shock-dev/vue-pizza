import Vue from 'vue';

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

        resetCart(state) {
            state.cart = {}
        },

        plusTotalPrice(state, price) {
            state.totalPrice += price
        },

        resetTotalPrice(state) {
            state.totalPrice = 0
        },

        minusTotalPrice(state, price) {
            state.totalPrice -= price
        },

        plusTotalCount(state) {
            state.totalCount++
        },

        minusTotalCount(state, count) {
            if (count === undefined) {
                return state.totalCount--
            }
            state.totalCount -= count
        },

        resetTotalCount(state) {
            state.totalCount = 0
        },

        unsetSection(state, id) {
            Vue.delete(state.cart, id)
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
        },

        deleteSection({ commit, state }, id) {
            const sectionPrice = state.cart[id].reduce((s, i) => s + i.price, 0)
            const sectionCount = state.cart[id].length

            commit('unsetSection', id)
            commit('minusTotalPrice', sectionPrice)
            commit('minusTotalCount', sectionCount)
        },

        clearCart({ commit }) {
            commit('resetCart')
            commit('resetTotalPrice')
            commit('resetTotalCount')
        }
    },

    getters: {
        cart: ({ cart }) => cart,
        totalPrice: ({ totalPrice }) => totalPrice,
        totalCount: ({ totalCount }) => totalCount
    }
}

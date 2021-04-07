import { getPizzas } from '@/api/pizza.api';

export default {
    namespaced: true,

    state: {
        pizzas: [],
        loading: false,
        error: null
    },

    mutations: {
        setPizzas(state, payload) {
            state.pizzas = payload
        },

        startLoading(state) {
            state.loading = true
        },

        finishLoading(state) {
            state.loading = false
        },

        setError(state, message) {
            state.error = message
        },

        clearError(state) {
            state.error = null
        }
    },

    actions: {
        async fetchPizzas({ commit, state }, filters) {
            try {
                if (state.error !== null) {
                    commit('clearError')
                }
                commit('startLoading')
                const pizzas = await getPizzas(filters)
                commit('setPizzas', pizzas)
            } catch(e) {
                commit('setError', 'Не удалось загрузить данные.')
            } finally {
                commit('finishLoading')
            }
        }
    },

    getters: {
        pizzas: ({ pizzas }) => pizzas,
        loading: ({ loading }) => loading,
        error: ({ error }) => error
    }
}

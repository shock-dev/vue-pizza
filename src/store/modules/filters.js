export default {
    namespaced: true,

    state: {
        category: null
    },

    mutations: {
        setCategory(state, idx) {
            state.category = idx
        }
    },

    getters: {
        category: ({ category }) => category
    }

}

export default {
    namespaced: true,

    state: {
        category: null,
        sortBy: {
            name: 'популярности',
            type: 'popular',
            order: 'desc'
        }
    },

    mutations: {
        setCategory(state, idx) {
            state.category = idx
        },

        setSortBy(state, val) {
            state.sortBy = val
        }
    },

    getters: {
        category: ({ category }) => category,
        sortBy: ({ sortBy }) => sortBy
    }

}

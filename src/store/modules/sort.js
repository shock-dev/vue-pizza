export default {
    namespaced: true,
    state: {
        items: ['популярности', 'цене', 'алфавиту'],
        active: 0
    },
    mutations: {
        changeSort(state, id) {
            state.active = id
        }
    },
    getters: {
        items(state) {
            return state.items
        },
        active(state) {
            return state.active
        }
    }
}

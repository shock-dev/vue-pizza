export default {
    namespaced: true,
    state: {
        items: ['популярности', 'цене', 'алфавиту'],
        active: 0
    },
    mutations: {
        setSort(state, id) {
            state.active = id
        }
    },
    getters: {
        items: ({ items }) => items,
        active: ({ active }) => active,
        getActiveFilter: ({ active, items }) => items[active]
    }
}

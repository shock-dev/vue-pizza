export default {
    namespaced: true,
    state: {
        items: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        active: null
    },
    mutations: {
        selectItem(state, id) {
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

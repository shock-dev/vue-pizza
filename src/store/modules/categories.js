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
        items: ({items}) => items,
        active: ({active}) => active
    }
}

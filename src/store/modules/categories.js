export default {
    namespaced: true,
    state: {
        items: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
        active: null
    },
    mutations: {
        selectItem(state, val) {
            state.active = val
        }
    },
    getters: {
        items: ({items}) => items,
        active: ({active}) => active
    }
}

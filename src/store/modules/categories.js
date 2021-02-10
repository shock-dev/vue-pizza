const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

export default {
    namespaced: true,
    state: {
        items: categories,
        active: null
    },
    mutations: {
        selectItem(state, val) {
            state.active = val
        }
    },
    getters: {
        items: ({items}) => items,
        getActiveCategory: ({active}) => active
    }
}

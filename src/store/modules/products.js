import axios from 'axios'

export default {
    namespaced: true,
    state: {
        items: [],
    },
    mutations: {
        setItems(state, data) {
            state.items = data
        }
    },
    actions: {
        getItems({commit}) {
            axios
                .get('http://localhost:3000/pizzas')
                .then(res => {
                    commit('setItems', res.data)
                })
        }
    },
    getters: {
        items(state) {
            return state.items
        }
    }
}

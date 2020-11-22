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
                .get('http://localhost:8080/db.json')
                .then(res => {
                    commit('setItems', res.data['pizzas'])
                })
        }
    },
    getters: {
        items(state) {
            return state.items
        }
    }
}

export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        setProduct(state, product) {
            state.products.push(product)
        },
        clearCart(state) {
            state.products = []
        }
    },
    getters: {
        products: ({ products }) => products,
        productsLength: ({ products }) => products.length
    }
}

export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        setProduct(state, product) {
            state.products.push(product)
        }
    },
    getters: {
        products: ({ products }) => products,
        productsLength: ({ products }) => products.length
    }
}

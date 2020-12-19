import request from "@/services/generic.service";

const getProducts = () => request({ url: 'pizzas', method: 'get' })

export {
    getProducts
}

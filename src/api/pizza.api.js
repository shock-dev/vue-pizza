import axios from 'axios'

const API = 'http://localhost:5000'

const prepareUrl = (category, sortBy) => {
    const { type, order } = sortBy
    return `${ category !== null ? `category=${ category }&` : '' }_sort=${ type }&_order=${ order }`
}

export const getPizzas = async ({ category, sortBy }) => {
    const { data } = await axios.get(`${ API }/pizzas?${ prepareUrl(category, sortBy) }`)
    return data
}

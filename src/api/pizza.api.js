import axios from 'axios'

const API = 'http://localhost:5000'

export const getPizzas = async () => {
    const { data } = await axios.get(`${ API }/pizzas`)
    return data
}

import axios from 'axios'

const API_URL = 'http://localhost:3000'

const request = async ({ url, method, data = {} }) => {
    const res = await axios[method](`${API_URL}/${url}`, data)
    return res.data
}

export default request

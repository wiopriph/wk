import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://sheets.onrender.com'

/**
 * Оправка запросов
 * @param data
 * @returns {Promise}
 */
export default function api (data) {
    return axios.post(
        url,
        JSON.stringify(data),
        { headers: { 'Content-Type': 'application/json' } }
    )
}

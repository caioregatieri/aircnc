import axios from 'axios'

export const baseURL = 'http://648a5da6.ngrok.io';

const api = axios.create({
    baseURL
})

export default api
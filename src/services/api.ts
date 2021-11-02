import axios from 'axios'

const api = axios.create({
    baseURL: 'https://project-tasks-backend.herokuapp.com/'
})

export default api;
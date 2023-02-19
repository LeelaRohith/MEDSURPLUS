import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://medsurplus-backend.onrender.com',
})

instance.interceptors.request.use((req) => {
  req.headers.authorization = 'Bearer ' + (localStorage.getItem('jwtKey') || '')
  return req
})

export const Axios = instance

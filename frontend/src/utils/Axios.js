import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000',
})

instance.interceptors.request.use((req) => {
  req.headers.authorization = 'Bearer ' + (localStorage.getItem('jwtKey') || '')
  console.log(req)
  return req
})

export const Axios = instance

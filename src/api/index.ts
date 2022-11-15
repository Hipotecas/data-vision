import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
})
http.interceptors.request.use((config) => {
  config.headers!.signature = 'vn3NL4=7mB8sdf562N5&sjh42N@3v7'
  if (
    config.method === 'post'
  )
    config.data = JSON.stringify(config.data)// ***** 这里转义

  return config
})
http.interceptors.response.use((config) => {
  return config.data
})
export default http

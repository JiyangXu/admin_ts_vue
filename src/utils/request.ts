import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

request.interceptors.request.use((config) => {
  console.log(config)
  return config
})

request.interceptors.response.use(
  (response) => {
    console.log(response)
    return response.data
  },
  (error) => {
    let message = ''
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'Expired Token'
        break
      case 403:
        message = 'Unauthorized'
        break
      case 404:
        message = 'Url Error'
        break
      case 500:
        message = 'Server Error'
        break
      default:
        message = 'Network Error'
        break
    }

    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

export default request

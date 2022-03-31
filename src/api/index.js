import axios from 'axios'
import { getToken } from '@/utils/setToken'

axios.defaults.baseURL = `/api`;

// 添加请求拦截器
axios.interceptors.request.use(config => {
  config.headers['token'] = getToken() // 获取token的值
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}), err => {
  return Promise.reject(err)
}

export default axios
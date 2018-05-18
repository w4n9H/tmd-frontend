import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.timeout = 10000 // 超时时间 10s

// request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          Message.error('接口不存在')
          break
        case 500:
          Message.error('服务器连接异常')
          break
        case 504:
          Message.error('服务器连接超时')
          break
      }
    }
    return Promise.reject(error)
  }
)

/* GET方法封装 */
export function get (url, params = {}, timeout) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'get',
      params: params,
      timeout: timeout || axios.defaults.timeout
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/* POST方法封装 */
export function post (url, data = {}, timeout) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: 'post',
      data: data,
      timeout: timeout || axios.defaults.timeout
    }).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}

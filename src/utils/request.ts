// axios二次封装，使用请求与相应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

//添加请求拦截器
request.interceptors.request.use((config) => {
  //返回配置对象
  //config配置对象，headers属性请求头，经常给服务器携带公共参数
  return config
})

//添加响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调
    //简化数据
    return response.data
  },
  (error) => {
    //失败回调：处理http网络错误
    //定义一个变量：存储网络错误信息
    let message = ''
    //http状态码
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'Token过期'
        break

      case 403:
        message = '无权访问'
        break

      case 404:
        message = '请求地址错误'
        break

      case 500:
        message = '服务器出现问题'
        break

      default:
        message = '网络错误'
        break
    }

    //提示错误信息
    ElMessage({
      type: 'error',
      message,
    })

    return Promise.reject(error)
  },
)

// 对外暴露
export default request

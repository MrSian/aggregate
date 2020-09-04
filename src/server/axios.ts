import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
  timeout: 60 * 1000
});

// 请求拦截器
service.interceptors.request.use(function (config) {
  // 在请求发送之前做一些处理
  // let user = store.state.user
  // if (user && user.token) {
  //   // 设置请求头的字段Authorization
  //   config.headers['Authorization'] = user.token
  // }
  // 附加参数
  // let attachParams = user ? { appId: user.appId, tenantId: user.tenantId } : {}
  // 添加请求参数
  switch (config.method) {
    case 'get':
    case 'delete':
      config.params = {
        // ...attachParams,
        ...config.params
      }
      break
    case 'post':
    case 'put':
      if (config.data instanceof Array) {
        break
      }
      config.data = {
        // ...attachParams,
        ...config.data
      }
      break
  }
  return config
}, function (error) {
  // 发送失败
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(function (response) {
  // 在请求响应之前做一些处理
  // console.log('service.interceptors.response response', response)
  // axios 返回数据中的 data
  const dataRes = response.data // 接口返回数据
  const { code } = dataRes
  // 返回码错误，输出错误信息
  if (code !== 0 && code !== '0') {
    return Promise.reject(dataRes)
  }
  return dataRes
}, function (error) {
  // 响应失败
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        error.message = error.response.data && error.response.data.msg ? error.response.data.msg : '请求错误'
        break
      case 401:
        error.message = '登录超时，请重新登录'
        // error.message = '此账号尚未授权，请先授权。'
        // error.message = '未授权，请登录'
        // 退出登录
        // router.replace({ path: '/login' })
        break
      case 403:
        error.message = '无权访问该信息'
        break
      case 404:
        error.message = `请求地址出错：${error.response.config.url}`
        break
      case 408:
        error.message = '请求超时'
        break
      case 412:
        error.message = '用户信息不正确'
        // 退出登录
        break
      case 500:
        // error.message = '服务器内部错误'
        error.message = error.response.data && error.response.data.msg ? error.response.data.msg : '服务器内部错误'
        break
      case 501:
        error.message = '服务未实现'
        break
      case 502:
        error.message = '网关错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网关超时'
        break
      case 505:
        error.message = 'HTTP版本不受支持'
        break
      default:
        error.message = '请求失败'
        break
    }
  }
  // 返回码错误，输出错误信息
  if (error.message) {
    // 提示
  }
  return Promise.reject(error)
})

export default service
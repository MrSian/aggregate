import request from './axios'

/**
 * api路径调整
 * @param urlData {string | object} 请求路径
 * eg.
 * '/org/getOrg/path'
 * 或者
 * {
 *  url: '/org/getOrg/{api}/{api}',
 *  join: [1, 2]
 * }
 * @returns {*}
 */
const apiChange = (urlData: any) => {
  if (typeof urlData === 'string') {
    return urlData
  }
  let url = urlData.url // 请求路径字符串(带有占位符{api})
  let join = urlData.join // 参数数组
  if (url && join) {
    return url.split('{api}').map((val: any, index: number) => (join[index] === 0 || join[index]) ? `${val}${join[index]}` : val).join('')
  }
  return urlData.url
}

export default {
  publicGet(urlData: any, params = {}) {
    return request({
      url: apiChange(urlData),
      method: 'get',
      params
    })
  },
  publicPost(urlData: any, data: any, params = {}) {
    return request({
      url: apiChange(urlData),
      method: 'post',
      data,
      params
    })
  },
  publicPut(urlData: any, data: any, params = {}) {
    return request({
      url: apiChange(urlData),
      method: 'put',
      data,
      params
    })
  },
  publicDelete(urlData: any, data: any, params = {}) {
    return request({
      url: apiChange(urlData),
      method: 'delete',
      params,
      data
    })
  }
}

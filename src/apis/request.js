import axios from 'axios'
import { saveAs } from 'file-saver'

import {
  ContentType,
  ResponseType,
  StatusCode,
  ErrorMessage,
  LoadingMessage,
} from '@/constants'
import Message from '@/utils/message'
import Loading from '@/utils/loading'

let uploadLoading, downloadLoading
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 60000,
  headers: {
    'Content-Type': ContentType.JSON,
  },
})

instance.interceptors.request.use(
  function (config) {
    // TODO
    return config
  },
  function (error) {
    Message.error(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  function (response) {
    const { code, msg } = response.data

    switch (code) {
      case StatusCode.SUCCESS:
        return response.data
      case StatusCode.PARAMS_ERROR:
        Message.error(msg || ErrorMessage.PARAMS_ERROR)
        return Promise.reject(msg || ErrorMessage.PARAMS_ERROR)
      default:
        Message.error(msg || ErrorMessage.INTERNAL_SERVER_ERROR)
        return Promise.reject(msg || ErrorMessage.INTERNAL_SERVER_ERROR)
    }
  },
  function (error) {
    Message.error(error.message)
    return Promise.reject(error)
  }
)

// 通用上传方法
instance.upload = function (url, data) {
  uploadLoading = Loading({
    text: LoadingMessage.UPLOADING,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  return instance
    .post(url, data, {
      headers: { 'Content-Type': ContentType.MULTIPART },
    })
    .then((response) => {
      Message.error(response.msg)
      uploadLoading.close()
    })
    .catch((error) => {
      console.error(error)
      Message.error(error.message)
      uploadLoading.close()
    })
}

// 通用下载方法
instance.download = function (url, data, filename) {
  downloadLoading = Loading({
    text: LoadingMessage.DOWNLOADING,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })

  return instance
    .post(url, data, {
      headers: { 'Content-Type': ContentType.FORM },
      responseType: ResponseType.BLOB,
    })
    .then(async (data) => {
      const blob = new Blob([data])

      saveAs(blob, filename)
      downloadLoading.close()
    })
    .catch((error) => {
      console.error(error)
      Message.error(error.message)
      downloadLoading.close()
    })
}

export default instance

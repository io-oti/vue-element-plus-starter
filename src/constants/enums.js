/**
 * 请求 - 通用请求头 - 内容类型
 * @enum {string}
 */
export const ContentType = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json; charset=utf-8',
  MULTIPART: 'multipart/form-data',
}
/**
 * 响应 - 通用请求头 - 响应类型
 * @enum {string}
 */
export const ResponseType = {
  BLOB: 'blob',
}

/**
 * 响应 - 状态码
 * @enum {number}
 */
export const StatusCode = {
  SUCCESS: 200,
  PARAMS_ERROR: 400,
  INTERNAL_SERVER_ERROR: 500,
}

/**
 * 响应 - 错误信息
 * @enum {string}
 */
export const ErrorMessage = {
  PARAMS_ERROR: '请求参数错误',
  INTERNAL_SERVER_ERROR: '服务器内部错误',
}

/**
 * 加载提示信息
 * @enum {string}
 */
export const LoadingMessage = {
  LOADING: '加载中，请稍候',
  UPLOADING: '上传中，请稍候',
  DOWNLOADING: '下载中，请稍候',
}

import { ElMessage } from 'element-plus'

// 定义默认的 ElMessage 配置选项并冻结，防止后续修改
export const messageOptions = Object.freeze({
  duration: 2000,
  grouping: true,
})

// 生成特定类型的 ElMessage 消息函数
const genMessage = (type) => {
  return (input = {}) => {
    const normalizedOptions =
      typeof input === 'string' ? { message: input } : input

    ElMessage[type]({ ...messageOptions, ...normalizedOptions })
  }
}

// 创建一个包含不同类型 ElMessage 消息函数的对象
const Message = ['success', 'warning', 'error', 'info'].reduce((res, type) => {
  res[type] = genMessage(type)

  return res
}, {})

export default Message

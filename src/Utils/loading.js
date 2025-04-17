import { ElLoading } from 'element-plus'
import { LoadingMessage } from '@/constants'

const loadingOptions = Object.freeze({
  text: LoadingMessage.LOADING,
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)',
})

const Loading = (options) => {
  return ElLoading.service({ ...loadingOptions, ...options })
}

export default Loading

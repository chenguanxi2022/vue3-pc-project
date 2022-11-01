// hooks 封装逻辑，提供响应式数据
import { useIntersectionObserver } from '@vueuse/core'

/**
 * 数据懒加载函数
 * @param {Function} apiFn  - API函数
 * @return {Array}   result - 渲染数据
 * @return {Element} target - DOM元素
 */
export const useLazyData = (apiFn) => {
  const target = ref(null)
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        // 调用API获取数据
        apiFn().then(data => {
          result.value = data.result
        })
      }
    }
  )
  // 返回 --> 数据（dom，后台数据）
  return { target, result }
}

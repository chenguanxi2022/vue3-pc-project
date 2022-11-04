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
    },
    {
      // threshold 容器和可视区交叉的占比（进入的面积/容器完整面积）取值为（0 - 1）之间，默认比0大，需要滚动较多才能触发进入可视区域
      threshold: 0
    }
  )
  // 返回 --> 数据（dom，后台数据）
  return { target, result }
}

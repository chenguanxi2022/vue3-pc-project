// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取全部分类（包含推荐商品）
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'GET')
}

import request from '@/utils/request'

/**
 * 获取品牌
 * @param {Integer} limit - 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('/home/brand', 'GET', { limit })
}

/**
 * 获取轮播图图片
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'GET')
}

/**
 * 获取新鲜好物图片
 * @returns Promise
 */
export const findNew = () => {
  return request('/home/new', 'GET')
}

/**
 * 获取人气好物图片
 * @returns Promise
 */
export const findHot = () => {
  return request('/home/hot', 'GET')
}

/**
 * 获取商品区域图片
 * @returns Promise
 */
export const findGoods = () => {
  return request('/home/goods', 'GET')
}

/**
 * 获取最新专题图片
 * @returns Promise
 */
export const findSpecial = () => {
  return request('/home/special', 'GET')
}

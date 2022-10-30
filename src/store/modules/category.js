// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      // 如果默认是[]数组，看不见默认的9个分类，等你数据加载完毕才会看到。
      // 所以：根据常量数据来生成一个默认的顶级分类数据，不会出现空白（没数据的情况）
      list: topCategory.map(item => ({ name: item }))
      // map得到一个新的数组并返回
    }
  },
  // payload是获取到的数据
  mutations: {
    setList (state, payload) {
      state.list = payload
    },
    // 修改当前一级分类下的open数据为ture
    show (state, item) {
      const currCategory = state.list.find(category => (category.id === item.id))
      currCategory.open = true
    },
    // 修改当前一级分类下的open数据为false
    hidden (state, item) {
      const currCategory = state.list.find(category => (category.id === item.id))
      currCategory.open = false
    }
  },
  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      // 给一级分类加上一个控制二级分类显示隐藏的数据open
      result.forEach(top => (top.open = false))
      // forEach修改数组，无返回值
      commit('setList', result)
    }
  }
}

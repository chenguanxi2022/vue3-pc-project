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
    }
  },
  // payload是获取到的数据
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList ({ commit }) {
      const { result } = await findAllCategory()
      commit('setList', result)
    }
  }
}

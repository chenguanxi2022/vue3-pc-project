// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展

import SlackSkeleton from './slack-skeleton.vue'
import SlackCarousel from './slack-carousel.vue'
import SlackMore from './slack-more.vue'
import SlackPanel from './slack-panel.vue'
import defaultImg from '@/assets/images/masahiro-miyagi-wJgpBEF0e7U-unsplash.jpg'

export default {
  install (app) {
    // 在app上进行扩展，app提供 component directive 函数
    // 如果要挂载原型 app.config.globalProperties 方式
    app.component('SlackSkeleton', SlackSkeleton)
    app.component('SlackCarousel', SlackCarousel)
    app.component('SlackMore', SlackMore)
    app.component('SlackPanel', SlackPanel)
    defineDirective(app)
  }
}

// 自定义指令
const defineDirective = (app) => {
  // 图片懒加载
  // 先不给 src 值，等到了可视区范围内再赋值
  app.directive('lazy', {
    // vue2 监听使用指令的DOM是否创建好，钩子函数：inserted
    // vue3 监听使用指令的DOM是否创建好（钩子函数和组件中一样），mounted
    mounted (el, binding) {
      // IntersectonObserver（WebAPI：观察对象）
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          // 图片加载失败
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      // 继续观察
      observe.observe(el)
    }
  })
}

## 1.npm 安装包报错 `peer eslint-plugin-vue@"^7.0.0" from @vue/eslint-config-standard`
- 包名后加`--legacy-peer-deps`

## 2.vue-router@4中的`router.currentRoute`是ref响应式数据
- 需要`router.currentRoute.value`

## 3.vue的api自动导入
- `vue.config.js`中
```js
configureWebpack: {
    plugins: [
      require('unplugin-auto-import/webpack')({
        imports: ['vue'],
        eslintrc: {
          enabled: true
        }
      })
    ]
  }
```
- `.eslintrc.js`中
```js
extends: [
  ...
  './.eslintrc-auto-import.json'
]
```
## 4.less变量和混入自动导入
- 使用vuecli的style-resources-loader插件来完成自动注入到每个vue组件中的style标签中
- `vue add style-resources-loader`
- `vue.config.js`中，配置
```js
const path = require('path')
pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.less'),
        path.join(__dirname, './src/assets/styles/mixins.less')
      ]
    }
  },
```

## 5.forEach与map
- map：得到一个新的数组并返回
- forEach()：修改原来数组，并无返回值

## 6.`@vueuse/core`包，封装了常见的一些交互逻辑
> useWindowScroll() 是@vueuse/core提供的api可返回当前页面滚动时候蜷曲的距离。x横向，y纵向
`npm i @vueuse/core@4.9.0`

## 7.任意多行文本超出省略的兼容性解决方案
1. 单行文本超出省略（兼容性高）
```css
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
2. 多行文本超出省略（Chrome）
```css
/* 以两行为例 */
.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```
## 8.find() 和 filter() 区别
- find：返回测试通过的第一个元素；如果无，返回`undefined`
- filter：返回测试通过的所有元素的新数组；如果无，返回一个空数组


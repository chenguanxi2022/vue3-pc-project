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
`npm i @vueuse/core@4.9.0`

## 7.
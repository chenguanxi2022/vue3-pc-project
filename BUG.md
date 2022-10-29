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
        imports: ['vue', 'vue-router'],
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


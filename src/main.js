import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ui from './components/library'

import 'normalize.css'
import '@/assets/styles/common.less'

// 插件的使用，在main.js中使用app.use(插件)

createApp(App).use(store).use(router).use(ui).mount('#app')

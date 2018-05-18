// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/init.css'
import App from './App'
import router from './router'
import {post, get} from './config/requests'

/* 阻止vue 在启动时生成生产提示 */
Vue.config.productionTip = true
/* 引入Element */
Vue.use(ElementUI)
/* 引入请求方法 */
Vue.prototype.$get = get
Vue.prototype.$post = post

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

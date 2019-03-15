import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import '@/common/stylus/reset.styl'
import '@/common/stylus/index.styl'

// 作用在于：阻止vue应用在启动的时候产生一些消息提示，可以将false
// 修改为true就知道在chrome的控制台会多出一些消息提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

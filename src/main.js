import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import './css/style.less'
import router from './router/index.js'

Vue.use(VueResource)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

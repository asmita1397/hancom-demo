import Vue from 'vue'
import App from './App.vue'
import resize from "vue-element-resize-detector";
Vue.use(resize)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

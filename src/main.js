import Vue from 'vue'
import App from './App.vue'
import resize from "vue-element-resize-detector";
Vue.use(resize)

import VueDragSelector from "vue-drag-selector";
Vue.use(VueDragSelector);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import ExampleApp from './components/ExampleApp.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  render: h => h(ExampleApp)
}).$mount('#app')

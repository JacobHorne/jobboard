import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import spectre from 'spectre.css'
// Vue.use(spectre);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  spectre,
  render: h => h(App)
}).$mount('#app')

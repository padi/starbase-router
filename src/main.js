import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Data from './components/Data.vue'

const router = new VueRouter({
  routes: [
    { path: '/data/:type', component: Data }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

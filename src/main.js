import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import GoogleAuthDemo from './components/GoogleAuthDemo.vue'
import FacebookAuthDemo from './components/FacebookAuthDemo.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { name: 'google-auth-demo', path: '/google-auth-demo', component: GoogleAuthDemo, props: true },
  { name: 'facebook-auth-demo', path: '/facebook-auth-demo', component: FacebookAuthDemo, props: true },
]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

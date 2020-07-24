import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Token } from './Token'
Vue.config.productionTip = false


router.beforeEach(async (to, from, next) => {
  const res = await Token.verifyToken();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (res.status === 404) {
      next({ path: '/' })
    }
    else {
      document.title = to.meta.title
      next()
    }
  } else {
    next()
  }

})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



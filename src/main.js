import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Numerate from './plugins/numerate'

import VueCarousel from 'vue-carousel'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.use(VueCarousel)

Vue.config.productionTip = false
Vue.prototype.$numerate = Numerate

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

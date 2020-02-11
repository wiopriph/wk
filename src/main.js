import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import Numerate from './plugins/numerate'

// https://github.com/vchaptsev/vue-yandex-metrika
import VueYandexMetrika from 'vue-yandex-metrika'
// https://github.com/SSENSE/vue-carousel
import VueCarousel from 'vue-carousel'
// https://github.com/ocordeiro/vue-smooth-scroll
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(vueSmoothScroll)
Vue.use(VueCarousel)

Vue.config.productionTip = false
Vue.prototype.$numerate = Numerate

Vue.use(VueYandexMetrika, {
  id: 57189649,
  env: 'production'
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

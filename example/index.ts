import Vue from 'vue'
import VueGoogleMaps from '@/index'
import App from './App.vue'

const apiKey = process.env.VUE_APP_API_KEY

if (!apiKey) {
  console.error('Vue Google Maps error: No api key. Some examples may not work as expected.\nTo fix this issue, please set API_KEY environment variable.')
}

Vue.use(VueGoogleMaps, {
  apiKey,
  libraries: ['places', 'geometry']
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')

document.title = 'Vue Google Maps'

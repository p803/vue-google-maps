import Vue from 'vue'
import App from './App.vue'
import VueGoogleMaps from '../src'

const key = process.env.VUE_APP_KEY;

if (key == '{key}') {
    console.error('VueGoogleMaps: Missing Google Maps API key. Some examples may not work as expected.\n               To fix this issue, please set VUE_APP_KEY environment variable.');
}

// Set API parameters.
Vue.use(VueGoogleMaps, {
    key,                               // required
    libraries: ['places', 'geometry'], // optional
    // other params...
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

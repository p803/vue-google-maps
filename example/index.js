import Vue from 'vue';
import App from './App.vue';
import VueGoogleMaps from '@/';

const googleMapsKey = process.env.VUE_APP_GOOGLE_MAPS_KEY;

if (googleMapsKey === '{google-maps-key}') {
    console.error('VueGoogleMaps: Missing Google Maps API key. Some examples may not work as expected.\n               To fix this issue, please set GOOGLE_MAPS_KEY environment variable.');
}

// Set api parameters.
Vue.use(VueGoogleMaps, {
    key: googleMapsKey, // required
    libraries: ['places', 'geometry'], // optional
    // other params...
});

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');

document.title = 'Vue Google Maps';

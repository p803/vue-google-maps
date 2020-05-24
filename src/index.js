import googleMapsApi from '@p803/google-maps-api';
import Autocomplete from './components/Autocomplete.vue';
import Map from './components/Map.vue';

const VueGoogleMaps = {};

VueGoogleMaps.install = (Vue, params) => {
    // Set API parameters.
    googleMapsApi.params = params;

    // Add API instance property.
    Vue.prototype.$googleMapsApi = googleMapsApi;

    // Register autocomplete component.
    Vue.component('google-maps-autocomplete', Autocomplete);

    // Register map component.
    Vue.component('google-maps-map', Map);
};

export default VueGoogleMaps;
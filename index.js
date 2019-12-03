import googleMapsApi from '@p803/google-maps-api'
import Autocomplete from './components/Autocomplete'

const VueGoogleMaps = {}

VueGoogleMaps.install = function (Vue, options) {
    // Add Google Maps API instance property.
    Vue.prototype.$googleMapsApi = googleMapsApi

    // Add Autocomplete component.
    Vue.component('google-maps-autocomplete', Autocomplete)

    // Load the Google Maps API.
    googleMapsApi(options)
}

export default VueGoogleMaps

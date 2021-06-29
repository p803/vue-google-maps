# Getting Started
Let's register the plugin.

## Node
```js
import Vue from 'vue'
import VueGoogleMaps from '@p803/vue-google-maps'

// Set api options (see https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html).
Vue.use(VueGoogleMaps, {
  apiKey: '{api-key}',
  libraries: ['places', 'geometry']
})
```

## Browser
```js
// Set api options (see https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html).
Vue.use(VueGoogleMaps, {
  apiKey: '{key}',
  libraries: ['places', 'geometry']
})
```

We may now use the components described in the next section.

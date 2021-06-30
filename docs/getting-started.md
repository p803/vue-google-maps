# Getting Started
Let's register the plugin. The official [Google Maps API loader](https://googlemaps.github.io/js-api-loader/interfaces/loaderoptions.html) is the authoritative source for plugin options.

## Node
```js
import Vue from 'vue'
import VueGoogleMaps from '@p803/vue-google-maps'

Vue.use(VueGoogleMaps, {
  apiKey: '{api-key}',
  libraries: ['places', 'geometry']
})
```

## Browser
Vue and VueGoogleMaps are registered as a global variables.
```js
Vue.use(VueGoogleMaps, {
  apiKey: '{key}',
  libraries: ['places', 'geometry']
})
```

We may now use the components described in the next section.

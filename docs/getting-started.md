# Getting Started
Let's register the plugin.

## Node
```js
import Vue from 'vue'
import VueGoogleMaps from '@p803/vue-google-maps'

// Set API parameters.
Vue.use(VueGoogleMaps, {
    key: '{key}',                      // required
    libraries: ['places', 'geometry'], // optional
    // other params...
})
```

## Browser
```js
// Set API parameters.
window.Vue.use(window.p803.VueGoogleMaps, {
    key: '{key}',                      // required
    libraries: ['places', 'geometry'], // optional
    // other params...
})
```

We may now use the components described in the next section.

# Google Maps plugin for Vue
This repository contains a Vue plugin that allows you to access the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) from your Vue project.

## Usage
Simple example of using the Google Maps with Vue.

1. Register the plugin in `main.js`.
```js
import VueGoogleMaps from '@p803/vue-google-maps'

Vue.use(VueGoogleMaps, {
    key: '{google-maps-api-key}', // required
    libraries: 'places,geometry', // optional
    // ... other
})
```

2. Use Google Maps components in your project.
```vue
<template>
    <google-maps-autocomplete
        :options="{
            types: ['(regions)'],
            componentRestrictions: { country: 'pl' },
            fields: ['geometry']
        }"
        @place_changed="onPlaceChanged"
    />
</template>

<script>
export default {
    methods: {
        onPlaceChanged(place) {
            // Print details.
            console.log(place);
        }
    }
};
</script>
```


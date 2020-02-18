# Google Maps plugin for Vue
This repository contains a Vue plugin that allows you to access the [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) from your Vue project.

## Available components
- Google Maps Autocomplete,
- Google Maps Map.

This list is not complete yet. If a component you are looking for is missing, please consider a [contribution](#contribution) to this repository.

## Usage
Simple example of using the plugin.

1. Register the plugin in `main.js`.
```js
import VueGoogleMaps from '@p803/vue-google-maps'

// Set API parameters.
Vue.use(VueGoogleMaps, {
    key: '{google-maps-api-key}',      // required
    libraries: ['places', 'geometry'], // optional
    // ...
})
```

2. Use components in your project.

```vue
<template>
    <google-maps-autocomplete
        :options="{
            types: ['(cities)'],
            componentRestrictions: { country: 'pl' },
            fields: ['geometry', 'name'],
            // ...
        }"
        @place_changed="onPlaceChanged"
    />

    <google-maps-map
        class="map"
        :options="{
            zoom: 4,
            center: {lat: -25.344, lng: 131.036},
            // ....
        }"
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

<style scoped>
.map {
    height: 320px;
}
</style>
```

The options that can be set on each component comply with the Google Maps documentation:
- [AutocompleteOptions](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions)
- [MapOptions](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions)

## Contribution
I'm planning to add more components every time a new component is required in my Vue project. If you'd like to do the same, I'd really appreciate your pull request 🙂

# Components
The options that can be set on each component adhere to the Google Maps API documentation and are listed below for quick reference.

## Map
Renders [google maps map](https://developers.google.com/maps/documentation/javascript/reference/map#Map) (see [options](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions)).

```vue
<template>
  <!-- Map centered at Warsaw, the capital of Poland. -->
  <google-maps-map class="map"
                    :options="{
                      zoom: 4,
                      center: {lat: -25.344, lng: 131.036}
                    }" />
</template>

<style scoped>
.map {
  height: 320px;
}
</style>
```

## Autocomplete
Renders [google maps autocomplete](https://developers.google.com/maps/documentation/javascript/reference/places-widget#Autocomplete) (see [options](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions)).

```vue
<template>
  <!-- Autocomplete polish cities. -->
  <google-maps-autocomplete v-model="input"
                            :options="{
                              types: ['(cities)'],
                              componentRestrictions: { country: 'pl' },
                              fields: ['geometry', 'name']
                            }"
                            @place_changed="onPlaceChanged" />
  />
</template>

<script>
export default {
  data () {
    return {
      input: '',
    }
  },
  methods: {
    onPlaceChanged (place) {
      // Print details.
      console.log(place)
    },
  },
})
</script>
```

---

This list is not complete yet. If a component you are looking for is missing, please consider a [contribution](https://github.com/p803/vue-google-maps#contribution) to this repository.

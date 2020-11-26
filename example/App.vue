<template>
    <div>
        <!-- Map centered at Warsaw, the capital of Poland. -->
        <google-maps-map
            class="map"
            :options="{
                zoom: 4,
                center: {lat: -25.344, lng: 131.036},
                // other options....
            }"
        />

        <!-- Autocomplete polish cities. -->
        <google-maps-autocomplete
            v-model="input"
            :options="{
                types: ['(cities)'],
                componentRestrictions: { country: 'pl' },
                fields: ['geometry', 'name'],
                // other options...
            }"
            @place_changed="onPlaceChanged"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: '',
        };
    },
    methods: {
        onPlaceChanged(place) {
            // Print details.
            console.log(place);
        },
    },
};
</script>

<style scoped>
.map {
    height: 320px;
}
</style>

<template>
    <input ref="autocomplete" />
</template>

<script>
export default {
    props: {
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            autocomplete: {}
        };
    },
    mounted() {
        this.createAutocomplete();
    },
    methods: {
        async createAutocomplete() {
            const api = await this.$googleMapsApi();

            this.autocomplete = new api.places.Autocomplete(
                this.$refs.autocomplete,
                this.options
            );

            this.autocomplete.addListener('place_changed', () =>
                this.$emit('place_changed', this.autocomplete.getPlace())
            );
        }
    }
};
</script>

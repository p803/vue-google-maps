<template>
    <input :value="value" @input="input" v-on="listeners" ref="autocomplete" />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        options: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            autocomplete: {},
        };
    },
    computed: {
        listeners() {
            const { input, ...listeners } = this.$listeners;

            return listeners;
        },
    },
    mounted() {
        this.createAutocomplete();
    },
    methods: {
        async createAutocomplete() {
            const api = await this.$googleMapsApi();

            this.autocomplete = new api.places.Autocomplete(
                this.$refs.autocomplete,
                this.options,
            );

            this.autocomplete.addListener('place_changed', () => this.$emit('place_changed', this.autocomplete.getPlace()));
        },
        input($event) {
            this.$emit('input', $event.target.value);
        },
    },
};
</script>

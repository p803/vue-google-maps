<template>
    <div ref="map" />
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
            map: {}
        };
    },
    mounted() {
        this.createMap();
    },
    methods: {
        async createMap() {
            const api = await this.$googleMapsApi();

            this.map = new api.Map(this.$refs.map, this.options);
        }
    }
};
</script>

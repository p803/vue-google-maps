<template>
  <div ref="map" />
</template>

<script lang="ts">
/* global google */
import Vue, { PropType } from 'vue'

export type Map = google.maps.Map
export type MapOptions = google.maps.MapOptions

export default Vue.extend({
  props: {
    options: {
      type: Object as PropType<MapOptions>,
      default: () => ({})
    }
  },
  data () {
    return {
      map: {} as Map
    }
  },
  mounted () {
    this.createMap()
  },
  methods: {
    async createMap () {
      const api = await this.$googleMapsApi
      const element = this.$refs.map as Element
      this.map = new api.Map(element, this.options)
    }
  }
})
</script>

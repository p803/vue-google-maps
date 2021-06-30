<template>
  <div ref="map" />
</template>

<script lang="ts">
/* global google */
import Vue, { PropType } from 'vue'

export type Map = google.maps.Map
export type Options = google.maps.MapOptions

export default Vue.extend({
  props: {
    options: {
      type: Object as PropType<Options>,
      default: () => ({})
    }
  },
  data () {
    return {
      map: {} as Map
    }
  },
  computed: {
    element (): Element {
      return this.$refs.map as Element
    }
  },
  created () {
    this.createMap()
  },
  methods: {
    async createMap () {
      const api = await this.$googleMaps
      this.map = new api.Map(this.element, this.options)
    }
  }
})
</script>

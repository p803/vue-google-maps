<template>
  <input
    ref="autocomplete"
    :value="value"
    @input="input"
    v-on="listeners"
  >
</template>

<script lang="ts">
/* global google */
import Vue, { PropType } from 'vue'

export type Autocomplete = google.maps.places.Autocomplete
export type Place = google.maps.places.PlaceResult
export type Options = google.maps.places.AutocompleteOptions

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object as PropType<Options>,
      default: () => ({})
    }
  },
  data () {
    return {
      autocomplete: {} as Autocomplete
    }
  },
  computed: {
    listeners (): unknown {
      const listeners = { ...this.$listeners }
      delete listeners.input
      return listeners
    }
  },
  mounted () {
    this.createAutocomplete()
  },
  methods: {
    async createAutocomplete () {
      const api = await this.$googleMapsApi
      const element = this.$refs.autocomplete as HTMLInputElement
      this.autocomplete = new api.places.Autocomplete(element, this.options)
      this.autocomplete.addListener('place_changed', this.placeChanged.bind(this))
    },
    input ($event: Event): void {
      const target = $event.target as HTMLInputElement
      this.$emit('input', target.value)
    },
    placeChanged (): void {
      this.$emit('place_changed', this.autocomplete.getPlace())
    }
  }
})
</script>

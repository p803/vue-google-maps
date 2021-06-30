<template>
  <input
    ref="autocomplete"
    :value="value"
    @input="onInput"
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
    },
    element (): HTMLInputElement {
      return this.$refs.autocomplete as HTMLInputElement
    }
  },
  created () {
    this.createAutocomplete()
  },
  methods: {
    async createAutocomplete () {
      const api = await this.$googleMaps
      this.autocomplete = new api.places.Autocomplete(this.element, this.options)
      this.autocomplete.addListener('place_changed', this.onPlaceChanged.bind(this))
    },
    onInput (): void {
      this.$emit('input', this.element.value)
    },
    onPlaceChanged (): void {
      this.$emit('place_changed', this.autocomplete.getPlace())
    }
  }
})
</script>

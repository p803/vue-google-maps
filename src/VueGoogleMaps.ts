import _Vue, { PluginObject } from 'vue'
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader'
import Autocomplete from '@/components/Autocomplete.vue'
import Map from '@/components/Map.vue'

export type GoogleMapsApi = typeof google.maps

export default class VueGoogleMaps implements PluginObject<LoaderOptions> {
  public install (Vue: typeof _Vue, options?: LoaderOptions): void {
    Vue.prototype.$googleMapsApi = this.load(options || { apiKey: '' })
    Vue.component('GoogleMapsAutocomplete', Autocomplete)
    Vue.component('GoogleMapsMap', Map)
  }

  protected async load (options: LoaderOptions): Promise<GoogleMapsApi> {
    const loader = new Loader(options)
    await loader.load()
    return window.google.maps
  }
}

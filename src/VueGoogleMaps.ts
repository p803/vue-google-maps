import _Vue, { PluginObject as Plugin } from 'vue'
import { Loader, LoaderOptions as Options } from '@googlemaps/js-api-loader'
import Autocomplete from '@/components/Autocomplete.vue'
import Map from '@/components/Map.vue'

export type Vue = typeof _Vue
export type GoogleMaps = typeof google.maps

export default class VueGoogleMaps implements Plugin<Options> {
  public install (Vue: Vue, options?: Options): void {
    Vue.prototype.$googleMaps = this.load(options || { apiKey: '' })
    Vue.component('GoogleMapsAutocomplete', Autocomplete)
    Vue.component('GoogleMapsMap', Map)
  }

  protected async load (options: Options): Promise<GoogleMaps> {
    const loader = new Loader(options)
    await loader.load()
    return window.google.maps
  }
}

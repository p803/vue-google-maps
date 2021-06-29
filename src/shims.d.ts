declare module '*.vue' {
  import Vue from 'vue'
  import { GoogleMapsApi } from '@/VueGoogleMaps'

  declare module 'vue/types/vue' {
    interface Vue {
      $googleMapsApi: Promise<GoogleMapsApi>;
    }
  }

  export default Vue
}

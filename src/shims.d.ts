declare module '*.vue' {
  import Vue from 'vue'
  import VueGoogleMaps, { GoogleMaps } from '@/VueGoogleMaps'

  declare module 'vue/types/vue' {
    interface Vue {
      $googleMaps: Promise<GoogleMaps>;
    }
  }

  declare global {
    interface Window {
      VueGoogleMaps: VueGoogleMaps
    }
  }

  export default Vue
}

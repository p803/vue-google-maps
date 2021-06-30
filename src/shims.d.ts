declare module '*.vue' {
  import Vue from 'vue'
  import { GoogleMaps } from '@/VueGoogleMaps'

  declare module 'vue/types/vue' {
    interface Vue {
      $googleMaps: Promise<GoogleMaps>;
    }
  }

  export default Vue
}

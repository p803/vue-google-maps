import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueGoogleMaps from '@/index'
import Autocomplete from '@/components/Autocomplete.vue'

const localVue = createLocalVue()

localVue.use(VueGoogleMaps)

describe('Autocomplete', () => {
  it('is a vue instance', () => {
    // Given:
    const options = {}
    // When:
    const wrapper = shallowMount(Autocomplete, {
      localVue,
      propsData: {
        options
      }
    })
    // Then:
    expect(wrapper).not.toBeUndefined()
  })
})

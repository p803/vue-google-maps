import { shallowMount, createLocalVue } from '@vue/test-utils'
import Map from '@/components/Map.vue'
import VueGoogleMaps from '@/index'

const localVue = createLocalVue()

localVue.use(VueGoogleMaps)

describe('Map', () => {
  it('is a vue instance', () => {
    // Given:
    const options = {}
    // When:
    const wrapper = shallowMount(Map, {
      localVue,
      propsData: { options }
    })
    // Then:
    expect(wrapper).not.toBeUndefined()
  })
})

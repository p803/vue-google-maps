import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueGoogleMaps from '@/index'
import Map from '@/components/Map.vue'

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

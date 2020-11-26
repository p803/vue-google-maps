import { shallowMount, createLocalVue } from '@vue/test-utils';
import Autocomplete from '@/components/Autocomplete.vue';
import VueGoogleMaps from '@/';

const localVue = createLocalVue();

localVue.use(VueGoogleMaps);

describe('Autocomplete', () => {
    it('is a vue instance', () => {
        // Given:
        const options = {};

        // When:
        const wrapper = shallowMount(Autocomplete, {
            localVue,
            propsData: { options },
        });

        // Then:
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});

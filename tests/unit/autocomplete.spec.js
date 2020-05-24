import { shallowMount, createLocalVue } from '@vue/test-utils';
import Autocomplete from '../../src/components/Autocomplete.vue';
import VueGoogleMaps from '../../src';

const localVue = createLocalVue();

localVue.use(VueGoogleMaps);

describe('Autocomplete', () => {
    it('is a Vue instance', () => {
        const options = {};

        const wrapper = shallowMount(Autocomplete, {
            localVue,
            propsData: { options },
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});

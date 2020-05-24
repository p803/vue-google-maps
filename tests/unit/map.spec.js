import { shallowMount, createLocalVue } from '@vue/test-utils';
import Map from '../../src/components/Map.vue';
import VueGoogleMaps from '../../src';

const localVue = createLocalVue();

localVue.use(VueGoogleMaps);

describe('Map', () => {
    it('is a Vue instance', () => {
        const options = {};

        const wrapper = shallowMount(Map, {
            localVue,
            propsData: { options },
        });

        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});

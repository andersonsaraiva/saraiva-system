import { shallowMount } from '@vue/test-utils';
import Comp from './container.vue';

describe('container.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp);
    expect(wrapper.element).toMatchSnapshot();
  });
});

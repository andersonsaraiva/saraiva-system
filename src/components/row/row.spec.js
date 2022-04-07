import { shallowMount } from '@vue/test-utils';
import Comp from './row.vue';

describe('row.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp);
    expect(wrapper.element).toMatchSnapshot();
  });
});

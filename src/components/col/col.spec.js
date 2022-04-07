import { shallowMount } from '@vue/test-utils';
import Comp from './col.vue';

describe('col.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('valid props', () => {
    const wrapper = shallowMount(Comp, {
      props: {
        sm: 12,
        cols: 12
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

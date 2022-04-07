import { shallowMount } from '@vue/test-utils';
import Comp from './button.vue';

describe('Button.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('does not throw console error when info type', () => {
    const wrapper = shallowMount(Comp);

    expect(wrapper.vm.$options.props.size.validator('bananinha')).toBe(null);
  });
});

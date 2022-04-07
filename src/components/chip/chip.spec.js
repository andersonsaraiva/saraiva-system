import { shallowMount } from '@vue/test-utils';
import Comp from './chip.vue';

describe('chip.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('verifica se é emitido ao clicar no icone', async () => {
    const wrapper = shallowMount(Comp);

    await wrapper.setProps({ removable: true });
    await wrapper.vm.remove();

    expect(wrapper.emitted().remove[0]).toEqual([]);
    expect(wrapper.element).toMatchSnapshot();
  });
});

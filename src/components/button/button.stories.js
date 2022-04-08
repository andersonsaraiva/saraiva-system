import Button from './button.vue';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'base', 'large']
      }
    }
  }
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">{{args.label}}</Button>'
});

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  secondary: false,
  fullwidth: false,
  hover: false,
  ghost: false,
  size: 'base',
  label: 'Button Primary'
};

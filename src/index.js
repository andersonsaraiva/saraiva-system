import components from './components';

const plugin = {
  install(Vue) {
    components.forEach(c => Vue.component(c.name, c));
  }
};

export default plugin;

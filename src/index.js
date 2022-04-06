import plugins from './plugins';
import components from './components';
import '@@/styles/main.scss';

const plugin = {
  install(Vue) {
    for (const prop in components) {
      const component = components[prop];
      Vue.component(component.name, component);
    }

    Vue.use(plugins);
  }
};

export default plugin;

import plugins from './plugins';
import components from './components';
import { tokens, themes } from './tokens';

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

export { tokens, themes };

export default plugin;

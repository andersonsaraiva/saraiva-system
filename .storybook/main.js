const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  webpackFinal(config, { configType }) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        {
          loader: require.resolve('sass-resources-loader'),
          options: {
            // core.scss contains variables, functions, mixins..
            resources: path.resolve(__dirname, '../src/styles/main.scss')
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};

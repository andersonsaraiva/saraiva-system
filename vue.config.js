const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@@/styles/index.scss";`
      }
    }
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common',
        '@@': path.resolve(__dirname, './src')
      }
    },
    plugins:
      process.env.BUILD === 'library'
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false
            }),
            new MergeIntoSingleFilePlugin({
              files: {
                'shared.scss': [
                  path.resolve(__dirname, './src/tokens/generated/tokens.scss'),
                  path.resolve(__dirname, './src/styles/shared/**/*.scss')
                ]
              }
            })
          ]
        : []
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    });

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .options({
        svgo: {
          plugins: [
            {
              removeViewBox: false
            },
            {
              removeDimensions: true
            }
          ]
        }
      });
  }
};

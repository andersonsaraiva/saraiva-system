const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  outputDir: path.resolve(__dirname, './dist'),
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@@/styles/shared.scss";`
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
  }
};

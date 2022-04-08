module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-multiple-template-root': 'off'
  },
  overrides: [
    {
      files: '**/*.vue',
      rules: {
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 3
            },
            multiline: {
              max: 1
            }
          }
        ]
      }
    },
    {
      files: ['**/src/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
};

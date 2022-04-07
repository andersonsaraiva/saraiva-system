module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/src/**/*.spec.js'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['!**/node_modules/**'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': 'vue-jest'
  }
};

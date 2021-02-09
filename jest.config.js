module.exports = {
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  reporters: [
    'default',
    ['./node_modules/jest-html-reporter', {
      'pageTitle': 'Test Report',
    }],
  ],
};

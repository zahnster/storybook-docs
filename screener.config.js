if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  projectRepo: 'zahnster/storybook-docs',
  storybookConfigDir: '.storybook',
  storybookStaticDir: 'node_modules/@salesforce-ux/design-system',
  apiKey: process.env.SCREENER_KEY,
  resolution: '1024x768',
  baseBranch: 'master',
  failureExitCode: 0
  // storybookStaticBuildDir: '.storybook-static'
};

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  projectRepo: 'zahnster/storybook-docs',
  storybookConfigDir: '.storybook',
  apiKey: process.env.SCREENER_KEY,
  resolution: '1024x768'
  // storybookStaticBuildDir: '.storybook-static'
};

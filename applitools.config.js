const resolution = { width: 1366, height: 768 };

module.exports = {
  appName: 'Storybook Docs',
  // batchName: process.env.TRAVIS_PULL_REQUEST
  //   ? `PR #${process.env.TRAVIS_PULL_REQUEST}`
  //   : 'Stand-alone',
  // showLogs: false,
  // saveDebugData: false,
  concurrency: 100,
  serverUrl: 'https://sfdceyes.applitools.com',
  // include: ({ name, kind, parameters }) => {
  //   return /3 file attachments/.test(name);
  // },
  // storybookStaticDir: '.dist/',
  storybookStaticDir: 'node_modules/@salesforce-ux/design-system',
  // storybookUrl: process.env.HEROKU_APP_NAME
  //   ? `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`
  //   : `undefined`,
  // storybookUrl: process.env.TRAVIS_PULL_REQUEST
  //   ? `https://design-system-framewor-pr-${
  //       process.env.TRAVIS_PULL_REQUEST
  //     }.herokuapp.com`
  //   : undefined,
  // runInDocker: true,
  // puppeteerOptions: {},
  browser: [
    // { width: resolution.width, height: resolution.height, name: 'firefox' }
    { width: resolution.width, height: resolution.height, name: 'chrome' }
    // {
    //   deviceName: 'iPhone X',
    //   screenOrientation: 'portrait',
    //   name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    // },
    // {
    //   deviceName: 'Pixel 2',
    //   screenOrientation: 'landscape',
    //   name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    // },
    // { width: resolution.width, height: resolution.height, name: 'ie11' },
    // { width: resolution.width, height: resolution.height, name: 'edge' }
  ]
};

const resolution = { width: 1366, height: 768 }

module.exports = {
  appName: 'Storybook Docs',
  concurrency: 100,
  serverUrl: 'https://sfdceyes.applitools.com',
  storybookStaticDir: 'node_modules/@salesforce-ux/design-system',
  browser: [
    // { width: resolution.width, height: resolution.height, name: 'firefox' }
    { width: resolution.width, height: resolution.height, name: 'chrome' },
    {
      deviceName: 'iPhone X',
      screenOrientation: 'portrait',
      name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    }
    // {
    //   deviceName: 'Pixel 2',
    //   screenOrientation: 'landscape',
    //   name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
    // },
    // { width: resolution.width, height: resolution.height, name: 'ie11' },
    // { width: resolution.width, height: resolution.height, name: 'edge' }
  ]
}

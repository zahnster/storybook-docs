const path = require('path');
const docs = require('./config/docs');

module.exports = {
  entry: docs,

  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, '.dist/docs')
  },

  externals: {
    react: 'react',
    'prop-types': 'prop-types'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.mdx$/,
        exclude: /node_modules/,
        use: ['babel-loader', '@mdx-js/loader']
      }
    ]
  }
};

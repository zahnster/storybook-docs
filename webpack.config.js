const path = require('path');
const glob = require('glob');

module.exports = {
  // entry: glob.sync('./ui/components/**/docs.stories.mdx'),
  entry: {
    avatar: './ui/components/Avatar/docs.stories.mdx',
    button: './ui/components/Button/docs.stories.mdx'
  },

  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: path.resolve(__dirname, '.dist/docs')
  },

  externals: {
    react: 'react',
    'prop-types': 'prop-types'
  },

  optimization: {
    minimize: false
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

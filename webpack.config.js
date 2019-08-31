const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync('./ui/components/**/docs.stories.mdx'),

  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, '.dist/docs')
  },

  externals: {
    react: 'react',
    'prop-types': 'propTypes'
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

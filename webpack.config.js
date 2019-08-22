const path = require('path');

module.exports = {
  entry: './docs.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '.dist/docs')
  },
  externals: {
    react: 'React'
  },
  // externals: ['React', '@mdx-js/react'],
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

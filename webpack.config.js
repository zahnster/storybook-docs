const path = require('path');

module.exports = {
  entry: './docs.js',
  // target: 'node',
  output: {
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, '.dist/docs')
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
    // ['@mdx-js/react']: '@mdx-js/react'
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
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  }
};

const addClasses = require('rehype-add-classes')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

const tags = [
  'p',
  'div',
  'a',
  'em',
  'strong',
  'ol',
  'ul',
  'li',
  'code',
  'blockquote',
  'pre',
  'tr',
  'td',
  'th',
  'table',
  'thead',
  'tbody',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
]

const tagsString = tags.reduce((tags, tag) => `${tags},${tag}`)

module.exports = {
  stories: ['../ui/components/**/*.stories.js'],
  addons: ['@storybook/addon-a11y/register', '@storybook/addon-docs/register'],

  webpackFinal: config => {
    config.module.rules.push(
      {
        test: /\.mdx$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: '@mdx-js/loader',
            options: {
              //
              // this rehype plugin wants a config listing html entities
              // to link to classnames.
              //
              // example:
              // {
              //   'h1,h2': 'title'
              //   'ol': 'ordered-list'
              // }
              //
              // In our case, all elements get a 'doc' hook for styling.
              //
              rehypePlugins: [[addClasses, { [tagsString]: 'doc' }]]
            }
          }
        ]
      }
      //     {
      //       test: /\.module\.s(a|c)ss$/,
      //       loader: [
      //         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //         {
      //           loader: 'css-loader',
      //           options: {
      //             modules: true,
      //             sourceMap: isDevelopment
      //           }
      //         },
      //         {
      //           loader: 'sass-loader',
      //           options: {
      //             sourceMap: isDevelopment
      //           }
      //         }
      //       ]
      //     },
      //     {
      //       test: /\.s(a|c)ss$/,
      //       exclude: /\.module.(s(a|c)ss)$/,
      //       loader: [
      //         isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
      //         'css-loader',
      //         {
      //           loader: 'sass-loader',
      //           options: {
      //             sourceMap: isDevelopment
      //           }
      //         }
      //       ]
      //     }
    )

    //   config.plugins.push(
    //     new MiniCssExtractPlugin({
    //       filename: isDevelopment ? '[name].css' : '[name].[hash].css',
    //       chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
    //     })
    //   )

    return config
  }
}

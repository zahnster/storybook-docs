const path = require('path');
const addClasses = require('rehype-add-classes');

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
];

const tagsString = tags.reduce((tags, tag) => `${tags},${tag}`);

module.exports = async ({ config }) => {
  config.module.rules.push({
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
  });

  return config;
};

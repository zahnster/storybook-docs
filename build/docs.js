const mdx = require('@mdx-js/mdx');
const fs = require('fs');
const path = require('path');
const ReactDOMServer = require('react-dom/server');

const storiesEx = path.resolve(
  __dirname,
  '../ui/components/Button/docs.stories.mdx'
);

const file = fs.readFile(
  path.resolve(__dirname, '../ui/components/Button/docs.stories.mdx'),
  'utf-8',
  (err, data) => {
    fileResolved(data);
  }
);

function fileResolved(data) {
  const transpile = async () => {
    return await mdx(data);
  };

  transpile().then(component => {
    const content = renderToStatic(component);
    console.log(typeof component);
  });
}

function renderToStatic(component) {
  ReactDOMServer.renderToStaticMarkup(component);
}

// const transpile = async () => {
//   // const jsx = await mdx()
// };

// console.log('f is for', file);

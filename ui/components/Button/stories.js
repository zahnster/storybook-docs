import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './';
import mdx from './docs.stories.mdx';

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const TextButton = () => (
  <Button onClick={action('clicked')}>Text Button</Button>
);

export const EmojiButton = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

// export const docs = mdx.parameters.docs;

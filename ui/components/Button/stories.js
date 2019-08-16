import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './';
import mdx from './docs.mdx';

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    docs: mdx
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

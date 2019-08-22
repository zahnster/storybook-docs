import React from 'react';
import Avatar from './';
import mdx from './docs.stories.mdx';

export default {
  title: 'Components|Avatar',
  component: Avatar,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Base = () => <Avatar name="Profile" />;

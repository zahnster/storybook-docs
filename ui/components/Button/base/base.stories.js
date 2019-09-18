import React from 'react';

import Button from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/Base',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <Button>Button</Button>;

import React from 'react';

import Button from '../';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Base',
  component: Button,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Base = () => <Button>Button</Button>;

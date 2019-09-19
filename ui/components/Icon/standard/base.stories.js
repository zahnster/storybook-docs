import React from 'react';

import StandardIcon from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Icon/Standard',
  component: StandardIcon,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <StandardIcon />;

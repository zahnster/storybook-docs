import React from 'react';

import DoctypeIcon from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Icon/Doctype',
  component: DoctypeIcon,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <DoctypeIcon />;

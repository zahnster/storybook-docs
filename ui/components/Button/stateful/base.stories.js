import React from 'react';

import StatefulButton from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/Stateful',
  component: StatefulButton,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <StatefulButton isNeutral isNotSelected />;

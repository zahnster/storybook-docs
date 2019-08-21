import React from 'react';

import StatefulButton from './';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Stateful',
  component: StatefulButton,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Base = () => <StatefulButton isNeutral isNotSelected />;

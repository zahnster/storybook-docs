import React from 'react';

import UtilityIcon from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Icon/Base',
  component: UtilityIcon,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <UtilityIcon className="slds-icon-text-default" />;

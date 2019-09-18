// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import CustomIcon from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Icon/Custom',
  component: CustomIcon,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => <CustomIcon />;

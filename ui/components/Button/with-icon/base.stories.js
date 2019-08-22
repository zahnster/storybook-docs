import React from 'react';

import Button from '../base';
import SvgIcon from '../../../../shared/components/SvgIcon';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/With Icon',
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Base = () => <Button isNeutral>Button Neutral</Button>;

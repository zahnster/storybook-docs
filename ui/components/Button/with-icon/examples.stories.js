import React from 'react';

import Button from '../';
import SvgIcon from '../../../../shared/components/SvgIcon';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/With Icon/Examples',
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const WithRightIcon = () => (
  <Button isNeutral>
    Button Neutral
    <SvgIcon
      className="slds-button__icon slds-button__icon_right"
      sprite="utility"
      symbol="download"
    />
  </Button>
);

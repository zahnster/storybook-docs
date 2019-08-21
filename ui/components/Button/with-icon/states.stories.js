import React from 'react';

import Button from '../';
import SvgIcon from '../../../../shared/components/SvgIcon';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/With Icon/States',
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Disabled = () => (
  <Button isNeutral disabled>
    <SvgIcon
      className="slds-button__icon slds-button__icon_left"
      sprite="utility"
      symbol="download"
    />
    Button Neutral
  </Button>
);

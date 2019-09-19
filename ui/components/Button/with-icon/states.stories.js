import React from 'react';

import Button from '../base';
import SvgIcon from '../../../../shared/components/SvgIcon';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/With Icon/States',
  parameters: {
    docs: {
      page: mdx
    }
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

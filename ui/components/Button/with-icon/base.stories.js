import React from 'react';

import Button from '../base';
import SvgIcon from '../../../../shared/components/SvgIcon';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/With Icon',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Base = () => (
  <Button isNeutral>
    <SvgIcon
      className="slds-button__icon slds-button__icon_left"
      sprite="utility"
      symbol="download"
    />
    Button Neutral
  </Button>
);

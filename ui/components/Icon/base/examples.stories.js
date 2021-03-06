import React from 'react';

import UtilityIcon from '../base';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Icon/Base/Examples',
  component: UtilityIcon,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CurrentColor = () => (
  <UtilityIcon containerClassName="slds-current-color" />
);

export const RTLFlipped = () => (
  <div dir="rtl" style={{ width: '32px' }}>
    <UtilityIcon
      containerClassName="slds-icon_flip"
      className="slds-icon-text-default"
      symbol="picklist_type"
      title="List icon"
      assistiveText="List icon"
    />
  </div>
);

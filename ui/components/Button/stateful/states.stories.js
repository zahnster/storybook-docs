import React from 'react';

import StatefulButton from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/Stateful/States',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Disabled = () => <StatefulButton isNotSelected disabled />;

export const Selected = () => <StatefulButton isNeutral isSelected />;

export const SelectedClicked = () => (
  <StatefulButton isNeutral isSelectedClicked />
);

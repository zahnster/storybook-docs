import React from 'react';

import StatefulButton from './';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Stateful/States',
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Disabled = () => <StatefulButton isNotSelected disabled />;

export const Selected = () => <StatefulButton isNeutral isSelected />;

export const SelectedClicked = () => (
  <StatefulButton isNeutral isSelectedClicked />
);

import React from 'react';

import DualStatefulButton, { DefaultText, PressedText } from './';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Dual Stateful/States',
  component: DualStatefulButton,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Pressed = () => (
  <DualStatefulButton isDisabled>
    <DefaultText>Follow</DefaultText>
    <PressedText>Following</PressedText>
  </DualStatefulButton>
);

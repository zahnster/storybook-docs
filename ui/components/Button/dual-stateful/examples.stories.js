import React from 'react';

import DualStatefulButton, { DefaultText, PressedText } from './';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Dual Stateful/Examples',
  component: DualStatefulButton,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Pressed = () => (
  <DualStatefulButton isPressed>
    <DefaultText>Follow</DefaultText>
    <PressedText>Following</PressedText>
  </DualStatefulButton>
);

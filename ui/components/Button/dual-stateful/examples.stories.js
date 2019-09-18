import React from 'react';

import DualStatefulButton, { DefaultText, PressedText } from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/Dual Stateful/Examples',
  component: DualStatefulButton,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Pressed = () => (
  <DualStatefulButton isPressed>
    <DefaultText>Follow</DefaultText>
    <PressedText>Following</PressedText>
  </DualStatefulButton>
);

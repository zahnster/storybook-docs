import React from 'react';

import DualStatefulButton, { DefaultText, PressedText } from './';
import mdx from '../docs.mdx';

export default {
  title: 'Base Components/Button/Dual Stateful/States',
  component: DualStatefulButton,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Pressed = () => (
  <DualStatefulButton isDisabled>
    <DefaultText>Follow</DefaultText>
    <PressedText>Following</PressedText>
  </DualStatefulButton>
);

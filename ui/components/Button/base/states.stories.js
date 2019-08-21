import React from 'react';

import Button from './';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Base/States',
  component: Button,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Disabled = () => <Button disabled>Button</Button>;

export const NeutralDisabled = () => (
  <Button isNeutral disabled>
    Neutral Button
  </Button>
);

export const BrandDisabled = () => (
  <Button isBrand disabled>
    Brand Button
  </Button>
);

export const OutlineBrandDisabled = () => (
  <Button isOutlineBrand disabled>
    Outline Brand Button
  </Button>
);

export const InverseDisabled = () => (
  <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
    <Button isInverse disabled>
      Inverse Button
    </Button>
  </div>
);

export const DestructiveDisabled = () => (
  <Button isDestructive disabled>
    Destructive Button
  </Button>
);

export const TextDistructiveDisabled = () => (
  <Button isTextDestructive disabled>
    Text Destructive Button
  </Button>
);

export const SuccessDisabled = () => (
  <Button isSuccess disabled>
    Success Button
  </Button>
);

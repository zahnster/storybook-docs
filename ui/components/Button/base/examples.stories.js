import React from 'react';

import Button from '../';
import mdx from '../docs.stories.mdx';

export default {
  title: 'Base Components/Button/Base/Examples',
  component: Button,
  parameters: {
    docs: mdx.parameters.docs
  }
};

export const Base = () => <Button>Button</Button>;

export const Brand = () => <Button isNeutral>Neutral Button</Button>;

export const OutlineBrand = () => (
  <Button isOutlineBrand>Outline Brand Button</Button>
);

export const Inverse = () => (
  <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
    <Button isInverse>Inverse Button</Button>
  </div>
);

export const Destructive = () => (
  <Button isDestructive>Destructive Button</Button>
);

export const TextDestructive = () => (
  <Button isTextDestructive>Text Destructive Button</Button>
);

export const Success = () => <Button isSuccess>Success Button</Button>;

export const Stretch = () => (
  <Button isStretch isNeutral>
    Stretched Neutral Button
  </Button>
);

export const FullWidth = () => (
  <Button isFullWidth isNeutral>
    Full Width Neutral Button
  </Button>
);

export const BaseLink = () => <Button use="a">Base Link</Button>;

export const NeutralLink = () => (
  <Button use="a" isNeutral>
    Neutral Link
  </Button>
);

export const BrandLink = () => (
  <Button use="a" isBrand>
    Brand Link
  </Button>
);

export const OutlineBrandLink = () => (
  <Button use="a" isOutlineBrand>
    Outline Brand Link
  </Button>
);

export const InverseLink = () => (
  <div style={{ backgroundColor: '#16325c', padding: '0.5rem' }}>
    <Button use="a" isInverse>
      Inverse Link
    </Button>
  </div>
);

export const DestructiveLink = () => (
  <Button use="a" isDestructive>
    Destructive Link
  </Button>
);

export const TextDestructiveLink = () => (
  <Button use="a" isTextDestructive>
    Text Destructive Link
  </Button>
);

export const SuccessLink = () => (
  <Button use="a" isSuccess>
    Success Link
  </Button>
);

export const StretchLink = () => (
  <Button use="a" isStretch isNeutral>
    Stretched Neutral Link
  </Button>
);

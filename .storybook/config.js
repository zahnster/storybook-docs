import { configure } from '@storybook/react';

configure(require.context('../ui', true, /stories\.js$/), module);

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles.css';

import { configure } from '@storybook/react';

configure(require.context('../ui', true, /stories\.js$/), module);

if (typeof window === 'object') {
  window.__screener_storybook__ = require('@storybook/react').getStorybook;
}

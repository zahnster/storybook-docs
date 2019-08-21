import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles.css';

import { configure } from '@storybook/react';

configure(require.context('../ui', true, /stories\.js$/), module);

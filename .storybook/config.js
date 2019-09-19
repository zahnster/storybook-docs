// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';
import './styles.css';
import './doc-styles.scss';

import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

configure(require.context('../ui', true, /stories\.js$/), module);

if (typeof window === 'object') {
  window.__screener_storybook__ = require('@storybook/react').getStorybook;
}

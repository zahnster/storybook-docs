import React from 'react';

import ProgressRing from './';

export default {
  title: 'Progress Indicators/Progress Ring/States',
  component: ProgressRing
};

export const Warning = () => <ProgressRing percent={100} isWarning />;

export const Expired = () => <ProgressRing percent={100} isExpired />;

export const Complete = () => <ProgressRing percent={100} isComplete />;

import React from 'react';

import ProgressRing from './';
import UtilityIcon from '../../Icon/base';

export default {
  title: 'Progress Indicators/Progress Ring/Examples',
  component: ProgressRing
};

export const PartiallyDrained = () => <ProgressRing percent={88} />;

export const PartiallyFilled = () => <ProgressRing percent={40} isFilling />;

export const PartiallyDrainedWithWarning = () => (
  <ProgressRing percent={20} isWarning>
    <UtilityIcon symbol="warning" title="Warning" assistiveText="Warning" />
  </ProgressRing>
);

export const PartiallyFilledWithWarning = () => (
  <ProgressRing percent={75} isFilling isWarning>
    <UtilityIcon symbol="warning" title="Warning" assistiveText="Warning" />
  </ProgressRing>
);

export const Expired = () => (
  <ProgressRing percent={0} isExpired>
    <UtilityIcon symbol="error" title="Expired" assistiveText="Expired" />
  </ProgressRing>
);

export const Complete = () => (
  <ProgressRing percent={100} isComplete>
    <UtilityIcon symbol="check" title="Complete" assistiveText="Complete" />
  </ProgressRing>
);

export const Large = () => (
  <ProgressRing percent={100} className="slds-progress-ring_large" />
);

export const ActiveStep = () => <ProgressRing percent={100} isActiveStep />;

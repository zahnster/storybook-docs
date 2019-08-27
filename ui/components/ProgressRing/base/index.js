// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class ProgressRing extends Component {
  getCoordinatesForPercent(percent) {
    const pct = percent / 100;
    const x = Math.cos(2 * Math.PI * pct);
    const y = Math.sin(2 * Math.PI * pct);

    return { x, y };
  }

  render() {
    const {
      percent,
      isWarning,
      isComplete,
      isExpired,
      isActiveStep,
      isFilling,
      className
    } = this.props;
    let adjustedPercent = percent;
    if (isFilling && !isComplete) {
      adjustedPercent = 100 - percent;
    }
    const { x, y } = this.getCoordinatesForPercent(adjustedPercent);
    const isLong = percent > 50 ? 1 : 0;
    const isSweep = isFilling && !isComplete ? 0 : 1;

    // const uniqueId = uniqueId.newId();

    let stateClass;

    if (isWarning) stateClass = 'slds-progress-ring_warning';
    if (isExpired) stateClass = 'slds-progress-ring_expired';
    if (isComplete) stateClass = 'slds-progress-ring_complete';
    if (isActiveStep) stateClass = 'slds-progress-ring_active-step';

    return (
      <div className={classNames('slds-progress-ring', stateClass, className)}>
        <div
          className="slds-progress-ring__progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={percent}
        >
          <svg viewBox="-1 -1 2 2">
            <path
              className="slds-progress-ring__path"
              id={`slds-progress-ring-path-${shortid.generate()}`}
              d={`M 1 0 A 1 1 0 ${isLong} ${isSweep} ${x} ${y} L 0 0`}
            />
          </svg>
        </div>

        <div className="slds-progress-ring__content">{this.props.children}</div>
      </div>
    );
  }
}

ProgressRing.propTypes = {
  percent: PropTypes.number,
  isWarning: PropTypes.bool,
  isComplete: PropTypes.bool,
  isExpired: PropTypes.bool,
  isActiveStep: PropTypes.bool,
  isFilling: PropTypes.bool
};

ProgressRing.defaultProps = {
  percent: 55
};

export default ProgressRing;

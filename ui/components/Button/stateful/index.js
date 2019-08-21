// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../base';
import SvgIcon from '../../../../shared/components/SvgIcon';

const StatefulButton = props => {
  const {
    className,
    disabled,
    isNotSelected,
    isSelected,
    isSelectedClicked
  } = props;

  return (
    <Button
      className={classNames('slds-button_stateful', className, {
        'slds-not-selected': isNotSelected,
        'slds-is-selected': isSelected,
        'slds-is-selected-clicked': isSelectedClicked
      })}
      disabled={disabled}
      aria-live="assertive"
      isNeutral
    >
      <span className="slds-text-not-selected">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="add"
        />
        Follow
      </span>
      <span className="slds-text-selected">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="check"
        />
        Following
      </span>
      <span className="slds-text-selected-focus">
        <SvgIcon
          className="slds-button__icon slds-button__icon_small slds-button__icon_left"
          sprite="utility"
          symbol="close"
        />
        Unfollow
      </span>
    </Button>
  );
};

StatefulButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isNotSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  isSelectedClicked: PropTypes.bool
};

export default StatefulButton;

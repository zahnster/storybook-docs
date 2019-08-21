// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SvgIcon from '../../../../shared/components/SvgIcon';

const UtilityIcon = props => {
  const symbol = props.symbol || 'announcement';
  return (
    <span
      className={classNames(
        'slds-icon_container slds-icon-utility-' + symbol,
        { 'slds-current-color': props.useCurrentColor },
        props.containerClassName
      )}
      title={
        props.title !== false
          ? props.title || 'Description of icon when needed'
          : null
      }
    >
      <SvgIcon
        className={classNames(
          'slds-icon',
          {
            'slds-icon_xx-small': props.size === 'xx-small',
            'slds-icon_x-small': props.size === 'x-small',
            'slds-icon_small': props.size === 'small',
            'slds-icon_large': props.size === 'large'
          },
          props.className
        )}
        sprite="utility"
        symbol={symbol}
      />
      {props.assistiveText !== false ? (
        <span className="slds-assistive-text">
          {props.assistiveText || 'Description of icon when needed'}
        </span>
      ) : null}
    </span>
  );
};

UtilityIcon.displayName = 'UtilityIcon';

UtilityIcon.propTypes = {
  assistiveText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Controls the size of the icon */
  size: PropTypes.oneOf(['large', 'small', 'x-small', 'xx-small']),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** Sets the slds-current-color class on the container */
  useCurrentColor: PropTypes.bool
};

export default UtilityIcon;

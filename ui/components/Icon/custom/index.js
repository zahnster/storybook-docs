// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

import SvgIcon from '../../../../shared/components/SvgIcon';

const CustomIcon = props => {
  const symbol = props.symbol || 'custom5';
  return (
    <span
      className={classNames('slds-icon_container slds-icon-custom-' + symbol)}
      title={props.title || 'Description of icon when needed'}
    >
      <SvgIcon
        className={classNames('slds-icon', props.className)}
        sprite="custom"
        symbol={symbol}
      />
      <span className="slds-assistive-text">
        {props.assistiveText || 'Description of icon when needed'}
      </span>
    </span>
  );
};

export default CustomIcon;

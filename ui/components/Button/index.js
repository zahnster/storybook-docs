// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import CannotBeSetWith from '../../../shared/helpers/cannot-be-set-with';

const Button = props => {
  const {
    className,
    disabled,
    isBrand,
    isNeutral,
    isOutlineBrand,
    isInverse,
    isDestructive,
    isTextDestructive,
    isSuccess,
    isFullWidth,
    isStretch,
    isFirst,
    isMiddle,
    isLast,
    use,
    ...rest
  } = props;

  var classNameList = classNames(
    'slds-button',
    {
      'slds-button_brand': isBrand,
      'slds-button_neutral': isNeutral,
      'slds-button_outline-brand': isOutlineBrand,
      'slds-button_inverse': isInverse,
      'slds-button_destructive': isDestructive,
      'slds-button_text-destructive': isTextDestructive,
      'slds-button_success': isSuccess,
      'slds-button_full-width': isFullWidth,
      'slds-button_stretch': isStretch,
      'slds-button_first': isFirst,
      'slds-button_middle': isMiddle,
      'slds-button_last': isLast
    },
    className
  );

  return (
    <React.Fragment>
      {use === 'a' ? (
        <a className={classNameList} {...rest} href="javascript:void(0);">
          {props.children}
        </a>
      ) : (
        <button className={classNameList} disabled={disabled} {...rest}>
          {props.children}
        </button>
      )}
    </React.Fragment>
  );
};

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isBrand: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isOutlineBrand: PropTypes.bool,
  isInverse: PropTypes.bool,
  isDestructive: PropTypes.bool,
  isTextDestructive: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isStretch: PropTypes.bool,
  isFirst: PropTypes.bool,
  isMiddle: PropTypes.bool,
  isLast: PropTypes.bool,
  use: CannotBeSetWith('disabled', PropTypes.oneOf(['a']))
};

export default Button;

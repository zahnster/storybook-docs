import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../index';
import SvgIcon from '../../../../shared/components/SvgIcon';

const DualStatefulButton = props => {
  const { isDisabled, isPressed } = props;

  return (
    <Button
      isNeutral
      className={classNames('slds-button_dual-stateful', {
        'slds-is-pressed': isPressed
      })}
      disabled={isDisabled}
      aria-live="assertive"
    >
      <DefaultText>Follow</DefaultText>
      <PressedText>Following</PressedText>
    </Button>
  );
};

DualStatefulButton.propTypes = {
  isDisabled: PropTypes.bool,
  isPressed: PropTypes.bool
};

const DefaultText = props => {
  return (
    <span className="slds-text-not-pressed">
      <SvgIcon
        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
        sprite="utility"
        symbol="add"
      />
      {props.children}
    </span>
  );
};

DefaultText.propTypes = {
  children: PropTypes.string.isRequired
};

const PressedText = props => {
  return (
    <span className="slds-text-pressed">
      <SvgIcon
        className="slds-button__icon slds-button__icon_small slds-button__icon_left"
        sprite="utility"
        symbol="check"
      />
      {props.children}
    </span>
  );
};

PressedText.propTypes = {
  children: PropTypes.string.isRequired
};

export default DualStatefulButton;
export { DefaultText, PressedText };

import React from 'react';

export default props => (
  <button className="my-button" onClick={props.onClick}>
    {props.children}
  </button>
);

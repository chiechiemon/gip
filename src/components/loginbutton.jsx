import React from 'react';

function Button(props) {
  return <button id="LogInButton" onClick={props.onClick}>{props.label}</button>;
}

export default Button;
import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
const Button = (props) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

export const ButtonOutline = (props) => {
  return (
    <button
      className={`btn btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </button>
  );
};

Button.prototype = {
  onClick: PropTypes.func,
};

export default Button;

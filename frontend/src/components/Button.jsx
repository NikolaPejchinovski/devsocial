import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, style, text, disabled, type }) => {
  return (
    <button
      className={`button ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  className: "button",
  style: {},
  disabled: false,
};

export default Button;

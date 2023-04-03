import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  className,
  outline,
  type = "button",
  style,
  variant,
  size,
  disabled,
  ...rest
}) => {
  return (
    <button
      style={style}
      type={type}
      className={classNames(className, "button", {
        ["button--" + variant]: variant,
        ["button--" + size]: size,
        "button-outline": outline,
        disabled: disabled,
      })}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  textPosition: PropTypes.oneOf([
    "circle",
    "black",
    "outline-primary",
    "outline",
    "add",
    "light",
    "danger",
    "success",
    "small",
  ]),
  size: PropTypes.oneOf(["big"]),
};

export default Button;

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Container = ({ children, variant, className }) => {
  return (
    <div
      className={classNames(className, "container", {
        ["container--" + variant]: variant,
      })}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  variant: PropTypes.oneOf(["small"]),
};

export default Container;

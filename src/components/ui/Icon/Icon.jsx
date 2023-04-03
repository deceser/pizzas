import React from "react";
import styles from "./Icon.module.scss";
import classNames from "classnames";

const Icon = ({ name, className, size, color, ...rest }) => {
  return (
    <div
      style={{ borderColor: color }}
      className={classNames(className, styles.icon)}
      {...rest}
    >
      <span
        style={{ fontSize: size, color }}
        className={name}
        placeholder={name}
      ></span>
    </div>
  );
};

export default Icon;

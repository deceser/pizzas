import React from "react";
import classNames from "classnames";
import styles from "./IconButton.module.scss";

const IconButton = ({ className, iconClassName, onClick, iconName }) => {
  return (
    <button
      className={classNames(className, styles.iconButton)}
      onClick={onClick}
    >
      <span className={classNames(iconClassName, iconName)}></span>
    </button>
  );
};

export default IconButton;

import React from "react";
import styles from "./Tabs.module.scss";
import { Button } from "../index";
import classNames from "classnames";

const Tabs = ({ items, value, onChange, className, tabClassName, ...rest }) => {
  return (
    <div className={classNames(className, styles.tabs)} {...rest}>
      {items.map((item, index) => (
        <div className={classNames(tabClassName, styles.tab)} key={item.id}>
          <Button
            variant={item.id === value ? "success" : "outline"}
            onClick={() => onChange(item.id)}
          >
            {item.name}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Tabs;

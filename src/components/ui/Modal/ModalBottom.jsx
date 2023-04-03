import classNames from "classnames";

import styles from "./Modal.module.scss";

const ModalBottom = ({ children, className }) => {
  return <div className={classNames(styles.bottom, className)}>{children}</div>;
};

export default ModalBottom;

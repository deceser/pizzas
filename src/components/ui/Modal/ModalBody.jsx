import classNames from "classnames";

import styles from "./Modal.module.scss";

const ModalBody = ({ children, className }) => {
  return <div className={classNames(styles.body, className)}>{children}</div>;
};

export default ModalBody;

import classNames from "classnames";

import styles from "./Input.module.scss";

function Input({ className, error, icon, label, inputRef, ...rest }) {
  return (
    <div
      className={classNames(styles.input, className, {
        "input--with-icon": icon,
        [styles.input_error]: error,
      })}
    >
      <div className={styles.icon}>{icon}</div>
      <input {...rest} placeholder="   " ref={inputRef}></input>
      {label ? <div className={styles.label}>{label}</div> : ""}
      {error ? <span className={styles.error}>{error}</span> : ""}
    </div>
  );
}

export default Input;

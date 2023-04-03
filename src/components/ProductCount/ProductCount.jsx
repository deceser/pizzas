import classNames from "classnames";

import styles from "./ProductCount.module.scss";
import PropTypes from "prop-types";

const ProductCount = ({ count, onInc, onDec, size, className }) => {
  return (
    <div
      className={classNames(className, styles.productCount, {
        [styles.small]: size === "small",
      })}
    >
      <button className={styles.button} onClick={onDec}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={classNames(styles.button, styles.buttonPrimary)}
        onClick={onInc}
      >
        +
      </button>
    </div>
  );
};

ProductCount.propTypes = {
  size: PropTypes.oneOf(["small"]),
};

export default ProductCount;

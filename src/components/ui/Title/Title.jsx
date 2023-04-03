import PropTypes from "prop-types";
import styles from "./Title.module.scss";
import classNames from "classnames";

const Title = ({
  children,
  variant = "h1",
  dashed,
  tiny,
  className,
  ...rest
}) => {
  return (
    <div
      className={classNames(className, styles.title, {
        [styles.dashed]: dashed,
        [styles.tiny]: tiny,
      })}
      {...rest}
    >
      {variant === "h1" ? <h1>{children}</h1> : ""}
      {variant === "h2" ? <h2>{children}</h2> : ""}
      {variant === "h3" ? <h3>{children}</h3> : ""}
      {variant === "h4" ? <h4>{children}</h4> : ""}
    </div>
  );
};

Title.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4"]),
};

export default Title;

import styles from "./CustomerBlock.module.scss";
import classNames from "classnames";

//rating number 1-5

const CustomerBlock = ({ name, text, img, rating }) => {
  return (
    <div className={styles.customerBlock}>
      <div className={styles.block}>
        <img src={img} className={styles.img} />
        <p>{text}</p>
        <span className="text-bold">{name}</span>
        <div className={styles.rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                className={classNames(styles.starColored, "icon-star")}
              ></span>
            ))}
          {Array(5 - rating)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                className={classNames(styles.starDisabled, "icon-star")}
              ></span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerBlock;

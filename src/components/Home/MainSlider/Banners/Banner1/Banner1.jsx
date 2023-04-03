import { Link as ScrollLink } from "react-scroll";
import styles from "./Banner1.module.scss";
import { Button, IconBlock } from "../../../../ui";

const Banner1 = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleItem}>
            It’s not just
            <span className="text-primary text-uppercase"> PIZZA</span>
          </span>
          <span className={styles.titleItem}>
            It's your
            <span className="text-success text-uppercase"> inspiration</span>
          </span>
        </h1>
        <p className={styles.text}>
          PIZZA wanted to create a pizza with heat for "a new wave of pizza
          lovers"
        </p>
        <div>
          <ScrollLink to="menu" smooth={true}>
            <Button className={styles.button}>Order Now</Button>
          </ScrollLink>
        </div>

        <div className={styles.icons}>
          <IconBlock
            color="white"
            iconName="icon-customers"
            textPosition="right"
            title="2100+"
            text="Customers"
            iconSize="25px"
          />
          <IconBlock
            color="white"
            iconName="icon-delivery"
            textPosition="right"
            title="1700+"
            text="Delivery"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;

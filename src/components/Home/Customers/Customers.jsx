import CustomersSlider from "./CustomersSlider/CustomersSlider";
import styles from "./Customers.module.scss";
import { Container } from "../../ui";

const Customers = () => {
  return (
    <Container variant="small">
      <div className={styles.customers}>
        <div className={styles.infoBlock}>
          <span className="subtitle">What Our Customers Say</span>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div className={styles.slider}>
          <CustomersSlider />
        </div>
      </div>
    </Container>
  );
};

export default Customers;

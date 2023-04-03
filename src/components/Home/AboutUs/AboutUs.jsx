import restaurantImg from "../../../assets/img/aboutUs/restaurat.jpg";
import styles from "./AboutUs.module.scss";
import { Container } from "../../ui";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs} id="aboutUs">
      <Container variant="small">
        <div className={styles.content}>
          <img src={restaurantImg} alt="restaurant" className={styles.img} />
          <div className={styles.infoBlock}>
            <h2 className={styles.title}>About Us</h2>
            <span className={styles.subtitle}>This is Our Story</span>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;

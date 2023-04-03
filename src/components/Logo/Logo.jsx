import { Link } from "react-router-dom";
import logo from "../../assets/img/pizza-logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img width="38" src={logo} alt="Pizza logo" />
      <div>
        <h1>Pizza</h1>
        <p>the most delicious pizza in the universe</p>
      </div>
    </Link>
  );
};

export default Logo;

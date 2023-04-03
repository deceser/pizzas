import { useDispatch } from "react-redux";
import { Logo } from "../../index";
import { Button, Container } from "../../ui";
import { PHONE_NUMBER } from "../../../config";
import { Link as ScrollLink } from "react-scroll";
import { toggleModalVisibility } from "../../../redux/actions/modals";
import { MODALS } from "../../../utils/constants";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleCallBackClick = () => {
    dispatch(toggleModalVisibility(MODALS.FeedbackModal));
  };

  return (
    <div className={styles.sidebar}>
      <Container>
        <div className={styles.content}>
          <div className={styles.leftBlock}>
            <Logo />
          </div>
          <div className={styles.centerBlock}>
            <span className="text-bold">{PHONE_NUMBER}</span>
            <Button variant="success" size="big" onClick={handleCallBackClick}>
              Call Back
            </Button>
          </div>
          <div className={styles.rightBlock}>
            <ScrollLink to="menu" smooth={true}>
              <Button className={styles.navigateButton}>Menu</Button>
            </ScrollLink>
            <ScrollLink to="aboutUs" smooth={true}>
              <Button className={styles.navigateButton}>About us</Button>
            </ScrollLink>
            <div className={styles.links}>
              <a href="https://facebook.com" target="_blank">
                <span className="icon-facebook"></span>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <span className="icon-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;

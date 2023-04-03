import styles from "./Feddback.module.scss";
import { Container, Icon } from "../../ui";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <Container variant="small">
        <div className={styles.content}>
          <Icon name="icon-chatting" className={styles.icon} />
          <span>
            Leave your feedback about the PIZZA place or a recent delivery
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Feedback;

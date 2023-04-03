import styles from "./Benefits.module.scss";
import { Container, IconBlock } from "../../ui";

const Benefits = () => {
  return (
    <Container>
      <div className={styles.benefits}>
        <IconBlock
          iconName="icon-vegan"
          textPosition="down"
          title="100 +"
          text="vegan meals"
          className={styles.icon}
        />
        <IconBlock
          iconName="icon-customers"
          textPosition="down"
          title="meet"
          text="place"
          className={styles.icon}
        />
        <IconBlock
          iconName="icon-support"
          textPosition="down"
          title="support"
          text="our clients"
          className={styles.icon}
        />
        <IconBlock
          iconName="icon-belt"
          textPosition="down"
          title="best"
          text="quality"
          className={styles.icon}
        />
        <IconBlock
          iconName="icon-star"
          textPosition="down"
          title="500+"
          text="reviews"
          className={styles.icon}
        />
      </div>
    </Container>
  );
};

export default Benefits;

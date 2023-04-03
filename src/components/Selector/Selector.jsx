import classNames from "classnames";
import { setSelectedField } from "../../redux/actions/pizzas";
import { useDispatch } from "react-redux";

import styles from "./Selector.module.scss";

const Selector = ({ id, types, sizes, activeType, activeSize, className }) => {
  const dispatch = useDispatch();

  const onSelectSize = (size) => {
    dispatch(setSelectedField(id, { type: activeType, size }));
  };

  const onSelectType = (type) => {
    dispatch(setSelectedField(id, { type, size: activeSize }));
  };

  /*   useEffect(() => {
    console.log({ activeSize, activeType });
    console.log({ sizes, types });
  }, [activeSize, activeType]); */

  return !types && !sizes ? (
    ""
  ) : (
    <div className={classNames(styles.selector, className)}>
      <ul className={styles.ul}>
        {types?.length &&
          types.map((item) => (
            <li
              key={item.id}
              className={classNames({
                [styles.active]: item.id === activeType.id,
              })}
              onClick={() => onSelectType(item)}
            >
              {item.name}
            </li>
          ))}
      </ul>
      <ul className={styles.ul}>
        {sizes.length &&
          sizes.map((item) => (
            <li
              key={item.id}
              className={item.id === activeSize.id ? styles.active : ""}
              onClick={() => onSelectSize(item)}
            >
              {item.name} inch
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Selector;

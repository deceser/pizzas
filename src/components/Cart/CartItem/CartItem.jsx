import { ProductCount } from "../../index";
import { useDispatch } from "react-redux";
import {
  cartItemCountDec,
  cartItemCountInc,
} from "../../../redux/actions/cart";
import classNames from "classnames";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./CartItem.module.scss";

const CartItem = ({ item, count, selectedProps, totalPrice, countSize }) => {
  const dispatch = useDispatch();
  const id = cartIdGenerate(item.id, selectedProps.type, selectedProps.size);

  const onIncCount = () => {
    dispatch(cartItemCountInc(id));
  };

  const onDecCount = () => {
    dispatch(cartItemCountDec(id));
  };

  return (
    <div className={styles.item}>
      <img
        src={item.ProductImages[0].url}
        alt={item.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <div className={styles.info}>
          <span className={classNames(styles.title)}>{item.name}</span>
          <div className={styles.selectedProps}>
            {selectedProps.size.name !== "none" && (
              <span className="">{selectedProps.size.name} inch</span>
            )}
            {selectedProps.type.name !== "none" && (
              <span className="">{selectedProps.type.name}</span>
            )}
          </div>
        </div>
        <div className={styles.rightBlock}>
          <ProductCount
            count={count}
            onInc={onIncCount}
            onDec={onDecCount}
            size={countSize}
            className={styles.productCount}
          />
          <span className={styles.price}>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

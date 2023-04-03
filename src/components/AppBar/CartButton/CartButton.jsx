import React from "react";
import { Button, CartIcon } from "../../ui";
import styles from "./CartButton.module.scss";

const CartButton = ({ onClick, totalPrice, totalCount }) => {
  return (
    <Button className={styles.cartBtn} onClick={onClick}>
      <span className={styles.cartBtn__price}>{totalPrice} $</span>
      <div className={styles.cartBtn__delimiter}></div>
      <CartIcon />
      <span>{totalCount}</span>
    </Button>
  );
};

export default CartButton;

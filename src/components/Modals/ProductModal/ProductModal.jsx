import { Button, Modal, ModalBody } from "../../ui";
import { MODALS } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { ProductCount, Selector } from "../../index";
import { useProduct } from "../../../hooks";
import classNames from "classnames";
import {
  addCartItem,
  cartItemCountDec,
  cartItemCountInc,
} from "../../../redux/actions/cart";
import { useState } from "react";
import { cartIdGenerate } from "../../../utils/helpers";

import styles from "./ProductModal.module.scss";

const ProductModal = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.modals[MODALS.ProductModal]);
  const { type, size, additionalPrice, cartCount } = useProduct(id);
  const [localCount, setLocalCount] = useState(1);

  const product = useSelector((state) =>
    state.pizzas.items.list.find((item) => item.id === id)
  );

  const onIncCount = () => {
    if (!cartCount) {
      setLocalCount(localCount + 1);
    } else {
      dispatch(cartItemCountInc(cartIdGenerate(id, type, size)));
    }
  };

  const onDecCount = () => {
    if (!cartCount) {
      if (localCount > 1) {
        setLocalCount(localCount - 1);
      }
    } else {
      dispatch(cartItemCountDec(cartIdGenerate(id, type, size)));
    }
  };

  const onAddToCart = () => {
    if (!cartCount) {
      dispatch(
        addCartItem(
          {
            item: product,
            selectedProps: { type, size, additionalPrice },
          },
          localCount
        )
      );
    }
  };

  return (
    <Modal name={MODALS.ProductModal} className={styles.modal}>
      <ModalBody className={styles.body}>
        <div className={styles.image}>
          <img src={product.ProductImages[0].url} />
        </div>
        <h2>{product.name}</h2>
        <Selector
          id={id}
          types={product.Types}
          sizes={product.Sizes}
          activeType={type}
          activeSize={size}
          className={styles.selector}
        />
        <div className={styles.bottom}>
          <div className={styles.countBlock}>
            <ProductCount
              count={cartCount || localCount}
              onInc={onIncCount}
              onDec={onDecCount}
            />
          </div>
          <span className={styles.price}>
            {product.price + additionalPrice}$
          </span>
          <div className={styles.addToCartBlock}>
            <Button
              variant="primary"
              size="big"
              disabled={true}
              className={classNames(styles.button, {
                [styles.inCartBtn]: cartCount,
              })}
              onClick={onAddToCart}
            >
              {cartCount ? <div>In cart</div> : "Add to cart"}
            </Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProductModal;

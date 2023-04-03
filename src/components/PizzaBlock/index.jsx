import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button } from "../ui";
import { addCartItem } from "../../redux/actions/cart";
import { useProduct } from "../../hooks";

import styles from "./PizzaBlock.module.scss";
import { useCallback, useEffect, useRef } from "react";
import {
  setProductModalId,
  toggleModalVisibility,
} from "../../redux/actions/modals";
import { MODALS } from "../../utils/constants";
import { Selector } from "../index";

const PizzaBlock = ({
  id,
  ProductImages,
  name,
  Types,
  Sizes,
  price,
  category,
  rating,
}) => {
  const dispatch = useDispatch();

  const { type, size, additionalPrice, cartCount } = useProduct(id);

  const isProductHasTypes = Types[0].name !== "none";
  const isProductHasSizes = Sizes[0].name !== "none";

  const onAddToCart = () => {
    dispatch(
      addCartItem({
        item: { id, ProductImages, name, Types, Sizes, price },
        selectedProps: { type, size, additionalPrice },
      })
    );
  };

  const productRef = useRef();

  const onClick = useCallback((e) => {
    const containsSelectorClass = !!e.target.closest(".selector");
    const containsBottomClass = !!e.target.closest("." + styles.bottom);

    if (!containsBottomClass && !containsSelectorClass) {
      dispatch(setProductModalId(id));
      dispatch(toggleModalVisibility(MODALS.ProductModal));
    }
  }, []);

  useEffect(() => {
    productRef.current.addEventListener("click", onClick);
    return () => productRef?.current?.removeEventListener("click", onClick);
  }, [productRef]);

  return (
    <div className={styles.pizzaBlock} ref={productRef}>
      <img className={styles.image} src={ProductImages[0].url} alt={name} />
      <h4 className={styles.title}>{name}</h4>
      <Selector
        id={id}
        types={isProductHasTypes ? Types : false}
        sizes={isProductHasSizes ? Sizes : false}
        activeType={type}
        activeSize={size}
        className="selector"
      />
      <div className={styles.bottom}>
        <div className={styles.price}>from {price + additionalPrice}$</div>
        <Button
          variant="outline-primary"
          className="button button--add"
          onClick={onAddToCart}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          <i>{cartCount}</i>
        </Button>
      </div>
    </div>
  );
};

/* PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  ProductImages: PropTypes.string.isRequired,
  Types: PropTypes.arrayOf(PropTypes.object).isRequired,
  Sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

PizzaBlock.defaultProps = {
  Types: [],
  Sizes: [],
}; */

export default PizzaBlock;

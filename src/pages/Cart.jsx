import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MODALS, ROLES } from "../utils/constants";
import { CartItem, ClearCart } from "../components";
import { Button, CartIcon, GoBackIcon } from "../components/ui";
import {
  cartItemCountDec,
  cartItemCountInc,
  checkoutCart,
  removeCartItem,
  resetCart,
  setCheckouting,
} from "../redux/actions/cart";
import { toggleModalVisibility } from "../redux/actions/modals";
import { useRole, useUserData } from "../hooks";
import { Oval } from "react-loader-spinner";

const Cart = () => {
  const dispatch = useDispatch();
  const role = useRole();
  const user = useUserData();
  const { items, totalPrice, totalCount, isCheckouting } = useSelector(
    (state) => state.cart
  );
  const itemsValues = Object.values(items);

  const onClearCartClick = () => {
    dispatch(resetCart());
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onIncCartItemCount = (id) => {
    dispatch(cartItemCountInc(id));
  };

  const onDecCartItemCount = (id) => {
    dispatch(cartItemCountDec(id));
  };

  const onBuyButtonClick = () => {
    if (role === ROLES.phantom) {
      dispatch(toggleModalVisibility(MODALS.СheckoutModal));
    } else {
      dispatch(checkoutCart(user.phoneNumber));
    }
  };

  useEffect(() => {
    if (isCheckouting) {
      dispatch(setCheckouting(false));
    }
  }, []);

  return (
    <div className="wrapper cart-wrapper">
      <div className="container container--medium">
        {isCheckouting ? (
          <div className="loader-wrapper">
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={5}
              strokeWidthSecondary={2}
              color="#fe5f1e"
              secondaryColor="white"
            />
          </div>
        ) : (
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartIcon />
                Cart
              </h2>
              {itemsValues.length ? (
                <ClearCart onClick={onClearCartClick} />
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="content__items">
                {itemsValues.length
                  ? itemsValues.map(
                      ({ item, selectedProps, count, totalPrice }) => {
                        const id = `${item.id}_${selectedProps.type}_${selectedProps.size}`;
                        return (
                          <CartItem
                            title={item.name}
                            price={totalPrice}
                            count={count}
                            img={item.imageUrl}
                            onRemove={() => onRemoveCartItem(id)}
                            onIncCount={() => onIncCartItemCount(id)}
                            onDecCount={() => onDecCartItemCount(id)}
                            key={id}
                            selectedProps={selectedProps}
                          />
                        );
                      }
                    )
                  : ""}
              </div>
              <div className="cart__bottom">
                {itemsValues.length ? (
                  <div>
                    <div className="cart__bottom-details">
                      <span>
                        Total count: <b>{totalCount} pieces</b>{" "}
                      </span>
                      <span>
                        Total price: <b>{totalPrice} $</b>{" "}
                      </span>
                    </div>
                    <div className="cart__bottom-buttons">
                      <Link to="/" className="cart__bottom__button">
                        <Button
                          href="/"
                          className="button--outline button--add go-back-btn"
                        >
                          <GoBackIcon />
                          <span>Go back</span>
                        </Button>
                      </Link>
                      <Button
                        className="pay-btn cart__bottom__button"
                        onClick={onBuyButtonClick}
                      >
                        <span>Checkout</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <h3>Cart is empty</h3>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

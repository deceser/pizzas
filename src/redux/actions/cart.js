import {
  checkoutOrder,
  phantomCheckoutOrderQury,
} from "../../services/order.service";
import { MODALS, ROLES } from "../../utils/constants";
import { toggleModalVisibility } from "./modals";

export const addCartItem = (item, count = 1) => {
  return {
    type: "ADD_CART_ITEM",
    payload: { ...item, count },
  };
};

export const removeCartItem = (id) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};

export const cartItemCountInc = (id) => {
  return {
    type: "CART_ITEM_COUNT_INC",
    payload: id,
  };
};

export const cartItemCountDec = (id) => {
  return {
    type: "CART_ITEM_COUNT_DEC",
    payload: id,
  };
};

export const setCheckoutCartMessenge = (error) => {
  return {
    type: "SET_CHECKOUT_CART_MESSENGE",
    payload: error,
  };
};

export const setOrderId = (id) => {
  return {
    type: "SET_ORDER_ID",
    payload: id,
  };
};

export const setCheckouting = (value) => ({
  type: "SET_CHECKOUTING",
  payload: value,
});

export const checkoutCart = (shippingData) => async (dispatch, getState) => {
  //dispatch(setCheckouting(true));

  const state = getState();
  const items = Object.values(state.cart.items);
  const orderList = items.map(({ item, selectedProps, count }) => ({
    id: item.id,
    count,
    TypeId: selectedProps.type.id,
    SizeId: selectedProps.size.id,
  }));

  try {
    const { role } = state.user;
    const data =
      role === ROLES.phantom
        ? await phantomCheckoutOrderQury(shippingData, orderList)
        : await checkoutOrder(shippingData, orderList);
    dispatch(resetCart());
    dispatch(setCheckouting(false));
    dispatch(
      setCheckoutCartMessenge(
        "Your order has been received. Please wait for a call from the operator"
      )
    );
    dispatch(toggleModalVisibility(MODALS.СheckoutResultModal));
    dispatch(setOrderId(data.id));
  } catch (error) {
    dispatch(setCheckouting(false));
    dispatch(setCheckoutCartMessenge(error.response.data.message));
  }
};

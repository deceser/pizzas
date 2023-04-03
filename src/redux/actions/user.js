import {
  logoutQuery,
  signInQuery,
  signUpQery,
} from "../../services/auth.service";
import { fetchUserOrders } from "../../services/order.service";
import { resetAdmin } from "./admin";
import { callBackQuery } from "../../services/user.service";
import { toggleModalVisibility } from "./modals";
import { MODALS } from "../../utils/constants";
import { setCheckoutCartMessenge } from "./cart";

export const setUserData = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};

export const setAuthError = (error) => {
  return {
    type: "SET_AUTH_ERROR",
    payload: error,
  };
};

export const setUserRole = (role) => {
  return {
    type: "SET_USER_ROLE",
    payload: role,
  };
};

export const resetUser = () => {
  return {
    type: "RESET_USER",
  };
};

export const setOrders = (orders) => {
  return {
    type: "SET_ORDERS",
    payload: orders,
  };
};

export const setUserLoading = (value) => {
  return {
    type: "SET_USER_LOADING",
    payload: value,
  };
};

export const setUserShippingData = (data) => ({
  type: "SET_USER_SHIPPING_DATA",
  payload: data,
});

export const getUserOrders = (page, size) => async (dispatch) => {
  try {
    const data = await fetchUserOrders(page, size);
    dispatch(setOrders(data));
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
  }
};

export const signUp = (number, password) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { id, phoneNumber, role } = await signUpQery(number, password);
    dispatch(setUserData({ id, phoneNumber }));
    dispatch(setUserRole(role));
    dispatch(setUserLoading(false));
  } catch (error) {
    dispatch(setUserLoading(false));
    dispatch(setAuthError(error.response.data.message));
  }
};

export const signIn = (number, password) => async (dispatch) => {
  try {
    dispatch(setUserLoading(true));
    const { id, phoneNumber, role } = await signInQuery(number, password);
    dispatch(setUserData({ id, phoneNumber }));
    dispatch(setUserRole(role));
    dispatch(setUserLoading(false));
  } catch (error) {
    dispatch(setUserLoading(false));
    dispatch(setAuthError(error.response.data.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await logoutQuery();
    dispatch(resetAdmin());
    dispatch(resetUser());
  } catch (error) {}
};

export const callBack = (phoneNumber) => async (dispatch) => {
  try {
    await callBackQuery(phoneNumber);
    dispatch(
      setCheckoutCartMessenge("Done! Please wait for a call from the operator")
    );
    dispatch(toggleModalVisibility(MODALS.СheckoutResultModal));
  } catch (error) {}
};

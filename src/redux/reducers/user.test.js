import { ROLES } from "../../utils/constants";
import user from "./user";

const initialState = {
  role: ROLES.phantom,
  data: {},
  orders: {
    list: [],
    totalCount: 0,
  },
  authError: null,
  shippingData: {},
  isLoading: false,
};

describe("user reducer", () => {
  it("should return initial state", () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_USER_DATA", () => {
    const data = {
      username: "test",
      role: ROLES.user,
      email: "test@gmail.com",
    };

    const action = {
      type: "SET_USER_DATA",
      payload: data,
    };

    expect(user({}, action)).toEqual({ data });
  });

  it("should handle SET_AUTH_ERROR", () => {
    const authError = "Some error";

    const action = {
      type: "SET_AUTH_ERROR",
      payload: authError,
    };

    expect(user({}, action)).toEqual({ authError });
  });

  it("should handle SET_USER_ROLE", () => {
    const role = ROLES.user;

    const action = {
      type: "SET_USER_ROLE",
      payload: role,
    };

    expect(user({}, action)).toEqual({ role });
  });

  it("should handle SET_ORDERS", () => {
    const orders = [1, 2, 3, 4];

    const action = {
      type: "SET_ORDERS",
      payload: orders,
    };

    expect(user({}, action)).toEqual({ orders });
  });

  it("should handle RESET_USER", () => {
    const orders = [1, 2, 3, 4];

    const action = {
      type: "SET_ORDERS",
      payload: orders,
    };

    expect(user({}, action)).toEqual({ orders });

    const resetAction = {
      type: "RESET_USER",
    };

    expect(user({}, resetAction)).toEqual(initialState);
  });

  it("should handle SET_USER_LOADING", () => {
    const isLoading = true;

    const action = {
      type: "SET_USER_LOADING",
      payload: isLoading,
    };

    expect(user({}, action)).toEqual({ isLoading });
  });

  it("should handle SET_USER_SHIPPING_DATA", () => {
    const shippingData = { address: "test address" };

    const action = {
      type: "SET_USER_SHIPPING_DATA",
      payload: shippingData,
    };

    expect(user({}, action)).toEqual({ shippingData });
  });
});

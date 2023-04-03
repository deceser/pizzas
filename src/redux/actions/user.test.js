import { ROLES } from "../../utils/constants";
import {
  getUserOrders,
  resetUser,
  setAuthError,
  setOrders,
  setUserData,
  setUserLoading,
  setUserShippingData,
} from "./user";
import * as orderActions from "../../services/order.service";
import * as actions from "./user";

jest.mock("../../services/order.service", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../services/order.service"),
  };
});

jest.mock("./user", () => {
  return {
    __esModule: true,
    ...jest.requireActual("./user"),
  };
});

describe("user actions", () => {
  it("should return SET_USER_DATA action", () => {
    const data = { username: "test", email: "test@gmail.com" };

    expect(setUserData(data)).toEqual({ type: "SET_USER_DATA", payload: data });
  });

  it("should return SET_AUTH_ERROR action", () => {
    const error = "Some error";

    expect(setAuthError(error)).toEqual({
      type: "SET_AUTH_ERROR",
      payload: error,
    });
  });

  it("should return SET_USER_ROLE action", () => {
    const role = ROLES.user;

    expect(setAuthError(role)).toEqual({
      type: "SET_AUTH_ERROR",
      payload: role,
    });
  });

  it("should return RESET_USER action", () => {
    expect(resetUser()).toEqual({
      type: "RESET_USER",
    });
  });

  it("should return SET_ORDERS action", () => {
    const orders = [1, 2, 3, 4];

    expect(setOrders(orders)).toEqual({
      type: "SET_ORDERS",
      payload: orders,
    });
  });

  it("should return SET_USER_LOADING action", () => {
    const isLoading = true;

    expect(setUserLoading(isLoading)).toEqual({
      type: "SET_USER_LOADING",
      payload: isLoading,
    });
  });

  it("should return SET_USER_SHIPPING_DATA action", () => {
    const shippingData = { address: "test address" };

    expect(setUserShippingData(shippingData)).toEqual({
      type: "SET_USER_SHIPPING_DATA",
      payload: shippingData,
    });
  });

  describe("getUserOrders action", () => {
    const orders = [1, 2, 3, 4];

    it("should get and dispatch orders", async () => {
      const dispatch = jest.fn();

      const fetchUserOrdersSpy = jest.spyOn(orderActions, "fetchUserOrders");
      fetchUserOrdersSpy.mockResolvedValue(orders);

      await getUserOrders(10, 5)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(setOrders(orders));
      expect(fetchUserOrdersSpy).toHaveBeenCalled();
    });

    it("should dispatch auth error", async () => {
      const dispatch = jest.fn();
      const error = { response: { data: { message: "Some error!" } } };

      const fetchUserOrdersSpy = jest.spyOn(orderActions, "fetchUserOrders");
      fetchUserOrdersSpy.mockRejectedValue(error);

      await getUserOrders(10, 5)(dispatch);

      expect(dispatch).toHaveBeenCalledWith(
        setAuthError(error.response.data.message)
      );
    });
  });
});

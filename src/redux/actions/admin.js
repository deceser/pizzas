import {
  addSizeQuery,
  addTypeQuery,
  changeSizeQuery,
  changeTypeQuery,
  deleteCallBackQuery,
  deleteSizeQuery,
  deleteTypeQuery,
  fetchAdminPizzas,
  fetchAdminUsers,
  fetchAllStockPizzas,
  fetchCallBacks,
  fetchOrdersList,
  fetchPizzasSales,
  fetchPizzasSalesBy,
  setPizzaAvailableQuery,
  setPizzaNotAvailableQuery,
  setPizzaSizeAvailableQuery,
  setPizzaTypeAvailableQuery,
  setUserRoleQuery,
  updateOrderQuery,
  updatePizzaQuery,
} from "../../services/admin.service";
import {
  addPizzaQuery,
  deletePizzaQuery,
  setDeliveryPriceQuery,
} from "../../services/pizza.service";
import {
  addPizzaSize,
  addPizzaType,
  deletePizzaSize,
  deletePizzaType,
  getPizzaSizes,
  getPizzaTypes,
  setPizzaSize,
  setPizzaType,
} from "./pizzas";
import {
  fetchOrder,
  fetchOrderShippingData,
} from "../../services/order.service";
import Order from "../../components/Admin/Orders/Order";

export const setOrders = (orders) => {
  return {
    type: "SET_ORDERS",
    payload: orders,
  };
};

export const resetAdmin = () => {
  return {
    type: "RESET_ADMIN",
  };
};

export const setOrderStatus = (id, status) => {
  return {
    type: "SET_ORDER_STATUS",
    payload: { id, status },
  };
};

const setAdminPizzas = (pizzas) => {
  return {
    type: "SET_ADMIN_PIZZAS",
    payload: pizzas,
  };
};

export const setAdminPizzaItem = (id, item) => {
  return {
    type: "SET_ADMIN_PIZZA_ITEM",
    payload: { id, item },
  };
};

export const setAdminError = (error) => {
  return {
    type: "SET_ADMIN_ERROR",
    payload: error,
  };
};

const setAdminStockPizzas = (pizzas) => {
  return {
    type: "SET_ADMIN_STOCK_PIZZAS",
    payload: pizzas,
  };
};

export const removeAdminStockPizzaSize = (id, size) => ({
  type: "REMOVE_ADMIN_STOCK_PIZZA_SIZE",
  payload: { id, size },
});

export const removeAdminStockPizzaType = (id, type) => ({
  type: "REMOVE_ADMIN_STOCK_PIZZA_TYPE",
  payload: { id, type },
});

export const addAdminPizzaSize = (id, size) => ({
  type: "ADD_ADMIN_PIZZA_SIZE",
  payload: { id, size },
});

export const addAdminPizzaType = (id, type) => ({
  type: "ADD_ADMIN_PIZZA_TYPE",
  payload: { id, type },
});

export const setAdminPizzaSizesTypes = (id, types, sizes) => ({
  type: "SET_ADMIN_PIZZA_TYPES_SIZES",
  payload: { id, types, sizes },
});

export const removeAdminPizzaSizesTypes = (id) => ({
  type: "REMOVE_ADMIN_PIZZA_TYPES_SIZES",
  payload: id,
});

const addAdminPizza = (pizza) => ({
  type: "ADD_ADMIN_PIZZA",
  payload: pizza,
});

const deleteAdminPizza = (id) => ({
  type: "DELETE_ADMIN_PIZZA",
  payload: id,
});

const setPizzasSales = (sales) => ({
  type: "SET_PIZZAS_SALES",
  payload: sales,
});

const setPizzaSalesBy = (sales) => ({
  type: "SET_PIZZA_SALES_BY",
  payload: sales,
});

const setAdminUsers = (users) => ({
  type: "SET_ADMIN_USERS",
  payload: users,
});

const setAdminUserRole = (id, role) => ({
  type: "SET_ADMIN_USER_ROLE",
  payload: { id, role },
});

const setDetailsOrderModal = (visibility, products, shippingData) => ({
  type: "SET_DETAILS_ORDER_MODAL",
  payload: { visibility, products, shippingData },
});

export const resetDetailsOrderModal = () => ({
  type: "RESET_DETAILS_ORDER_MODAL",
});

const setCallBacks = (callBacks) => ({
  type: "SET_CALL_BACKS",
  payload: callBacks,
});

const deleteAdminCallBack = (id) => ({
  type: "DELETE_CALL_BACK",
  payload: id,
});

export const setTimeoutAdminError = (error) => async (dispatch) => {
  dispatch(setAdminError(error));
  setTimeout(() => {
    dispatch(setAdminError(null));
  }, 3000);
};

export const getOrders = (page, size) => async (dispatch) => {
  try {
    const orders = await fetchOrdersList(page, size);
    dispatch(setOrders(orders));
  } catch (error) {}
};

export const updateOrder = (id) => async (dispatch, getState) => {
  const state = getState();
  const order = state.admin.orders.list.find((order) => order.id === id);
  try {
    await updateOrderQuery(order);
  } catch (error) {}
};

export const getAdminPizzas = (page, size) => async (dispatch) => {
  try {
    const pizzas = await fetchAdminPizzas(page, size);
    dispatch(setAdminPizzas(pizzas));
  } catch (error) {}
};

export const updatePizza = (id, pizza) => async (dispatch) => {
  dispatch(setAdminError(null));
  try {
    await updatePizzaQuery({ id, ...pizza });
    dispatch(setAdminPizzaItem(id, pizza));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const getAdminAllStockPizzas = (page, size) => async (dispatch) => {
  try {
    const pizzas = await fetchAllStockPizzas(page, size);

    dispatch(getPizzaSizes());
    dispatch(getPizzaTypes());
    dispatch(setAdminStockPizzas(pizzas));
  } catch (error) {
    if (error.response) {
    }
  }
};

export const setPizzaAvailable = (id, types, sizes) => async (dispatch) => {
  try {
    await setPizzaAvailableQuery(id);
    dispatch(setAdminPizzaSizesTypes(id, types, sizes));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const setPizzaNotAvailable = (id) => async (dispatch) => {
  try {
    await setPizzaNotAvailableQuery(id);
    dispatch(removeAdminPizzaSizesTypes(id));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const setPizzaSizeAvailable =
  (id, name, sizeId, available) => async (dispatch) => {
    try {
      await setPizzaSizeAvailableQuery(id, sizeId, !available);
      if (available) {
        dispatch(removeAdminStockPizzaSize(id, name));
      } else {
        dispatch(addAdminPizzaSize(id, name));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setTimeoutAdminError(error.response.data.message));
      }
    }
  };

export const setPizzaTypeAvailable =
  (id, name, typeId, available) => async (dispatch) => {
    try {
      await setPizzaTypeAvailableQuery(id, typeId, !available);
      if (available) {
        dispatch(removeAdminStockPizzaType(id, name));
      } else {
        dispatch(addAdminPizzaType(id, name));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setTimeoutAdminError(error.response.data.message));
      }
    }
  };
export const addPizza = (pizza) => async (dispatch) => {
  try {
    const newPizza = await addPizzaQuery(pizza);
    dispatch(addAdminPizza(newPizza));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const deletePizza = (id) => async (dispatch) => {
  try {
    await deletePizzaQuery(id);
    dispatch(deleteAdminPizza(id));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const getPizzasSales = () => async (dispatch) => {
  try {
    const sales = await fetchPizzasSales();
    dispatch(setPizzasSales(sales));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const getPizzaSalesBy = (by, num) => async (dispatch) => {
  try {
    const sales = await fetchPizzasSalesBy(by, num);
    dispatch(setPizzaSalesBy(sales));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const getAdminUsers = () => async (dispatch) => {
  try {
    const users = await fetchAdminUsers();
    dispatch(setAdminUsers(users));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const setUserRole = (id, role) => async (dispatch) => {
  try {
    await setUserRoleQuery(id, role);
    dispatch(setAdminUserRole(id, role));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const setAdminPizzaSize = (size) => async (dispatch) => {
  try {
    await changeSizeQuery(size);
    dispatch(setPizzaSize(size));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const setAdminPizzaType = (type) => async (dispatch) => {
  try {
    await changeTypeQuery(type);
    dispatch(setPizzaType(type));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const addPizzaTypeAdmin = (type) => async (dispatch) => {
  try {
    const newType = await addTypeQuery(type);
    dispatch(addPizzaType(newType));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const addPizzaSizeAdmin = (size) => async (dispatch) => {
  try {
    const newSize = await addSizeQuery(size);
    dispatch(addPizzaSize(newSize));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const deleteAdminPizzaSize = (id) => async (dispatch) => {
  try {
    await deleteSizeQuery(id);
    dispatch(deletePizzaSize(id));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const deleteAdminPizzaType = (id) => async (dispatch) => {
  try {
    await deleteTypeQuery(id);
    dispatch(deletePizzaType(id));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const showOrderDetails = (id) => async (dispatch, getState) => {
  dispatch(setDetailsOrderModal(true));
  try {
    const order = getState().admin.orders.list.find((order) => order.id === id);
    dispatch(
      setDetailsOrderModal(true, order.OrderProducts, order.OrderShipping)
    );
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const getCallBacks = () => async (dispatch) => {
  try {
    const callBacks = await fetchCallBacks();
    dispatch(setCallBacks(callBacks));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const deleteCallBack = (id) => async (dispatch) => {
  try {
    await deleteCallBackQuery(id);
    dispatch(deleteAdminCallBack(id));
  } catch (error) {
    dispatch(setTimeoutAdminError(error.response.data.message));
  }
};

export const setDeliveryPrice = (price) => async (dispatch) => {
  await setDeliveryPriceQuery(price);
};

import api from "./api";
import protectedApi from "./protectedApi";

export const checkoutOrder = async (shippingData, orderList) => {
  const response = await protectedApi.post("order/checkout", {
    shippingData,
    orderList,
  });
  return response.data;
};

export const phantomCheckoutOrderQury = async (shippingData, orderList) => {
  const response = await api.post("order/phantom-checkout", {
    orderList,
    shippingData,
  });
  return response.data;
};

export const fetchOrder = async (id) => {
  const response = await api.get("order/info/" + id);
  return response.data;
};

export const fetchUserOrders = async (page, size) => {
  const response = await protectedApi.get(`order/list-by-user`, {
    params: { page, size },
  });

  return response.data;
};

export const fetchOrderShippingData = async (id) => {
  const response = await protectedApi.get("order/shipping-data/" + id);

  return response.data;
};

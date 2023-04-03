import api from "./api";
import protectedApi from "./protectedApi";

export const fetchPizzaSizes = async () => {
  const response = await api.get("product/sizes");
  return response.data;
};

export const fetchPizzaTypes = async () => {
  const response = await api.get("product/types");
  return response.data;
};

export const addPizzaQuery = async (pizza) => {
  const response = await protectedApi.post("product/add", pizza);
  return response.data;
};

export const deletePizzaQuery = async (id) => {
  const response = await protectedApi.get("product/delete/" + id);
  return response.data;
};

export const fetchAviablePizzas = async (page, size, category) => {
  const response = await api.get(
    `stock/available?page=${page}&&size=${size}&&category=${category}`
  );
  return response.data;
};

export const fetchDeliveryPrice = async () => {
  const response = await api.get("order/delivery-price");
  return response.data;
};

export const setDeliveryPriceQuery = async (price) => {
  const response = await api.post("order/set-delivery-price", { price });
  return response.data;
};

export const fetchProductSearch = async (name) => {
  const response = await api.get(`product/search?name=${name}`);
  return response.data;
};

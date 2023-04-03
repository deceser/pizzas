import protectedApi from "./protectedApi";

export const fetchOrdersList = async (page, size) => {
  const response = await protectedApi.get(
    `order/list?page=${page}&&size=${size}`
  );

  return response.data;
};

export const updateOrderQuery = async (order) => {
  const response = await protectedApi.post("order/update", { order });
  return response.data;
};

export const fetchAdminPizzas = async (page, size) => {
  const response = await protectedApi.get(
    `product/list?page=${page}&&size=${size}`
  );
  return response.data;
};

export const updatePizzaQuery = async (pizza) => {
  const response = await protectedApi.post("product/update", { pizza });
  return response.data;
};

export const fetchAllStockPizzas = async (page, size) => {
  const response = await protectedApi.get(
    `stock/allPizzas?page=${page}&&size=${size}`
  );
  return response.data;
};

export const setPizzaAvailableQuery = async (id) => {
  const response = await protectedApi.get("stock/setPizzaAvailable/" + id);
  return response.data;
};

export const setPizzaNotAvailableQuery = async (id) => {
  const response = await protectedApi.get("stock/setPizzaNotAvailable/" + id);
  return response.data;
};

export const setPizzaTypeAvailableQuery = async (id, TypeId, available) => {
  const response = await protectedApi.post("stock/setPizzaTypeAvailable", {
    id,
    TypeId,
    available,
  });
  return response.data;
};

export const setPizzaSizeAvailableQuery = async (id, SizeId, available) => {
  const response = await protectedApi.post("stock/setPizzaSizeAvailable", {
    id,
    SizeId,
    available,
  });
  return response.data;
};

export const fetchPizzasSales = async () => {
  const response = await protectedApi.get("statistics/product-sales");

  return response.data;
};

export const fetchPizzasSalesBy = async (by, num) => {
  const response = await protectedApi.get(
    `statistics/sales-by?by=${by}&&num=${num}`
  );

  return response.data;
};

export const fetchAdminUsers = async () => {
  const response = await protectedApi.get(`user/list`);

  return response.data;
};

export const setUserRoleQuery = async (id, role) => {
  const response = await protectedApi.post("user/set-role", { id, role });

  return response.data;
};

export const changeSizeQuery = async (size) => {
  const response = await protectedApi.post("product/update-size", size);
  return response.data;
};

export const changeTypeQuery = async (type) => {
  const response = await protectedApi.post("product/update-type", type);
  return response.data;
};

export const addSizeQuery = async (size) => {
  const response = await protectedApi.post("product/add-size", size);
  return response.data;
};

export const addTypeQuery = async (type) => {
  const response = await protectedApi.post("product/add-type", type);
  return response.data;
};

export const deleteSizeQuery = async (id) => {
  const response = await protectedApi.post("product/delete-size", { id });
  return response.data;
};

export const deleteTypeQuery = async (id) => {
  const response = await protectedApi.post("product/delete-type", { id });
  return response.data;
};

export const fetchCallBacks = async () => {
  const response = await protectedApi.get("call-backs/list");
  return response.data;
};

export const deleteCallBackQuery = async (id) => {
  const response = await protectedApi.get("call-backs/delete/" + id);
  return response.data;
};

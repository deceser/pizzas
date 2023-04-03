import {
  fetchAviablePizzas,
  fetchDeliveryPrice,
  fetchPizzaSizes,
  fetchPizzaTypes,
  fetchProductSearch,
} from "../../services/pizza.service";
import { setCategory } from "./filters";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const setSelectedFields = (fields) => ({
  type: "SET_SELECTED_FIELDS",
  payload: fields,
});

export const setSelectedField = (id, field) => ({
  type: "SET_SELECTED_FIELD",
  payload: { id, field },
});

const setPizzaSizes = (sizes) => ({
  type: "SET_PIZZA_SIZES",
  payload: sizes,
});

const setPizzaTypes = (types) => ({
  type: "SET_PIZZA_TYPES",
  payload: types,
});

export const resetPizzas = () => ({
  type: "RESET_PIZZAS",
});

export const setPizzaSize = (size) => ({
  type: "SET_PIZZA_SIZE",
  payload: size,
});

export const setPizzaType = (type) => ({
  type: "SET_PIZZA_TYPE",
  payload: type,
});

export const addPizzaSize = (size) => ({
  type: "ADD_PIZZA_SIZE",
  payload: size,
});

export const addPizzaType = (type) => ({
  type: "ADD_PIZZA_TYPE",
  payload: type,
});

export const deletePizzaSize = (id) => ({
  type: "DELETE_PIZZA_SIZE",
  payload: id,
});

export const deletePizzaType = (id) => ({
  type: "DELETE_PIZZA_TYPE",
  payload: id,
});

const setDelivery = (delivery) => ({
  type: "SET_DELIVERY",
  payload: delivery,
});

export const fetchPizzas = (page, size, category) => async (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(setPizzas({ list: [], totalCount: 0 }));
  const pizzas = await fetchAviablePizzas(page, size, category);
  const { list, totalCount, sizes, types } = pizzas;
  dispatch(setPizzaSizes(sizes));
  dispatch(setPizzaTypes(types));
  dispatch(
    setPizzas({
      list: list.length ? list : null,
      totalCount,
    })
  );
};

export const getPizzaSizes = () => async (dispatch) => {
  const sizes = await fetchPizzaSizes();

  dispatch(setPizzaSizes(sizes));
};

export const getPizzaTypes = () => async (dispatch) => {
  const types = await fetchPizzaTypes();

  dispatch(setPizzaTypes(types));
};

export const getDeliveryPrice = () => async (dispatch) => {
  const delivery = await fetchDeliveryPrice();
  dispatch(setDelivery(delivery));
};

export const searchProduct = (name) => async (dispatch) => {
  dispatch(setLoaded(false));
  dispatch(setCategory("none"));
  dispatch(setPizzas({ list: [], totalCount: 0 }));
  const products = await fetchProductSearch(name);
  dispatch(setLoaded(true));
  dispatch(
    setPizzas({
      list: products.length ? products : null,
      totalCount: products.length,
    })
  );
};

import { fetchCategories } from "../../services/filters.service";

export const setSortBy = (name) => {
  return {
    type: "SET_SORT_BY",
    payload: name,
  };
};

export const setCategory = (catIndex) => {
  return {
    type: "SET_CATEGORY",
    payload: catIndex,
  };
};

const setCategories = (categories) => {
  return {
    type: "SET_CATEGORIES",
    payload: categories,
  };
};

export const getCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories([{ id: 0, name: "All" }, ...categories]));
};

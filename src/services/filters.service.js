import api from "./api";

export const fetchCategories = async () => {
  return api.get("category/list").then((response) => response.data);
};

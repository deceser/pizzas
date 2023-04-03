export const toggleModalVisibility = (modal) => {
  return {
    type: "TOGGLE_MODAL_VISIBILITY",
    payload: modal,
  };
};

export const setProductModalId = (id) => {
  return {
    type: "SET_PRODUCT_MODAL_ID",
    payload: id,
  };
};

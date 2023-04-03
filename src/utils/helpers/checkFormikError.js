const checkFormikError = (form, row) => {
  return form.touched[row] && form.errors[row] ? form.errors[row] : null;
};

export default checkFormikError;

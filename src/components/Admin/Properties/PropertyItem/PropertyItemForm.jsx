import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Input } from "../../../ui";

const PropertyItemForm = ({
  id,
  name,
  price,
  onSubmit,
  buttonName,
  onDelete,
}) => {
  const [isFormChanged, setIsFormChanged] = useState(false);

  const formik = useFormik({
    initialValues: {
      id,
      name,
      price: price || 0,
    },
    onSubmit: (values) => {
      onSubmit(values);
      setIsFormChanged(false);
    },
  });

  useEffect(() => {
    if (formik.values.name !== name || formik.values.price !== price) {
      setIsFormChanged(true);
    } else {
      setIsFormChanged(false);
    }
  }, [formik.values]);

  const deleteButtonClick = () => {
    onDelete(id);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="properties__column-item">
        <Input
          className="properties__input"
          label="Name"
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="properties__column-item">
        <Input
          className="properties__input"
          label="Price"
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </div>
      <div className="properties__action-buttons">
        <Button className="button--danger" onClick={deleteButtonClick}>
          Delete
        </Button>
        <Button
          className="button--default properties__update-btn"
          type="submit"
          style={{ visibility: isFormChanged ? "visible" : "hidden" }}
        >
          {buttonName}
        </Button>
      </div>
    </form>
  );
};

export default PropertyItemForm;

import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../../redux/actions/admin";
import { Button, Input, SelectPopup } from "../../ui";

const AddProduct = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.filters);
  const categoriesValues = categories
    .map((category) => category.name)
    .filter((category) => category !== "All");
  const [activeCategoryName, setActiveCategoryName] = useState();

  const formik = useFormik({
    initialValues: {
      name: "",
      images: "",
      price: "",
      category: "",
      rating: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addPizza(values));
      resetForm();
      setActiveCategoryName();
    },
  });

  const handleSelectCategory = (name) => {
    const categoryId = categories.find((category) => category.name === name).id;

    formik.setValues({
      ...formik.values,
      category: categoryId,
    });
    setActiveCategoryName(name);
  };

  return (
    <form className="product__add" onSubmit={formik.handleSubmit}>
      <Input
        label="Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        label="Image1,"
        name="images"
        onChange={formik.handleChange}
        value={formik.values.images}
      />
      <Input
        label="Price"
        type="number"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {/*<Input*/}
      {/*  label="Category"*/}
      {/*  type="number"*/}
      {/*  name="category"*/}
      {/*  onChange={formik.handleChange}*/}
      {/*  value={formik.values.category}*/}
      {/*/>*/}
      {categories ? (
        <SelectPopup
          name="select category"
          items={categoriesValues}
          activeItem={activeCategoryName}
          onSelectItem={handleSelectCategory}
        />
      ) : (
        ""
      )}
      <Input
        label="Rating"
        type="number"
        name="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
      />
      <Button className="button--default" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddProduct;

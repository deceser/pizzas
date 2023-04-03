import { Button, Input } from "../../ui";
import { useFormik } from "formik";

import styles from "./Delivery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDeliveryPrice } from "../../../redux/actions/pizzas";
import { setDeliveryPrice } from "../../../redux/actions/admin";

const Delivery = () => {
  const dispatch = useDispatch();

  const { delivery } = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(getDeliveryPrice());
  }, []);

  const formik = useFormik({
    initialValues: {
      price: "",
    },
    onSubmit: (values) => {
      dispatch(setDeliveryPrice(values.price));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        label="Delivery price"
        type="number"
        id="price"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price || delivery.price || ""}
        className={styles.input}
      />
      <Button variant="primary" type="submit" className={styles.button}>
        Update
      </Button>
    </form>
  );
};

export default Delivery;

import { useFormik } from "formik";
import paymentSchema from "../../../utils/schemas/payment.schema";
import { PAYMENT_METHODS } from "../../../utils/constants";
import { useUserData } from "../../../hooks";
import { useSelector } from "react-redux";

const usePaymentForm = (onSubmit) => {
  const { shippingData } = useSelector((state) => state.user);

  const phone = useUserData().phoneNumber || "";

  const form = useFormik({
    initialValues: shippingData?.email
      ? shippingData
      : {
          email: "",
          firstName: "",
          lastName: "",
          city: "",
          postCode: "",
          address: "",
          phone: phone,
          paymentMethod: PAYMENT_METHODS.card,
        },
    onSubmit: (values) => {
      onSubmit(values);
    },
    validationSchema: paymentSchema,
  });

  return form;
};

export default usePaymentForm;

import * as yup from "yup";

const requiredText = " ";

const paymentSchema = yup.object().shape({
  email: yup.string().email().required(requiredText),
  firstName: yup.string().required(requiredText),
  lastName: yup.string().required(requiredText),
  city: yup.string().required(requiredText),
  postCode: yup.string().required(requiredText),
  address: yup.string().required(requiredText),
  phone: yup.string().required(requiredText),
});

export default paymentSchema;

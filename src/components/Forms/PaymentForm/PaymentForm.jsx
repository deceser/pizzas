import { Checkbox, Input, Title } from "../../ui";
import PhoneInput from "react-phone-input-2";
import { PAYMENT_METHODS, ROLES } from "../../../utils/constants";

import styles from "./PaymentForm.module.scss";
import { NavLink } from "react-router-dom";
import { checkFormikError } from "../../../utils/helpers";
import { useRole } from "../../../hooks";

const PaymentForm = ({ form }) => {
  const isLoggined = useRole() !== ROLES.phantom;

  const handlePaymentMethodChange = (e) => {
    form.setValues({
      ...form.values,
      paymentMethod: e.currentTarget.value,
    });
  };

  const isSelectedMethod = (method) => {
    return method === form.values.paymentMethod;
  };

  return (
    <form className={styles.form} onSubmit={form.handleSubmit}>
      <div className={styles.firstBlock}>
        <Title variant="h4" tiny={true}>
          Contact information
        </Title>
        {!isLoggined ? (
          <div className={styles.subText}>
            <span>Already have an account?</span>
            <NavLink to="/auth/sign-in">Log in</NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
      <Input
        label="Email"
        type="email"
        id="email"
        name="email"
        value={form.values.email}
        onChange={form.handleChange}
        error={checkFormikError(form, "email")}
      />
      <Title variant="h4" tiny={true}>
        Shipping address
      </Title>
      <div className={styles.doubleInput}>
        <Input
          label="First Name"
          id="firstName"
          name="firstName"
          error={checkFormikError(form, "firstName")}
          value={form.values.firstName}
          onChange={form.handleChange}
        />
        <Input
          label="Last Name"
          id="lastName"
          name="lastName"
          error={checkFormikError(form, "lastName")}
          value={form.values.lastName}
          onChange={form.handleChange}
        />
      </div>
      <div className={styles.doubleInput}>
        <Input
          label="City"
          id="city"
          name="city"
          error={checkFormikError(form, "city")}
          value={form.values.city}
          onChange={form.handleChange}
        />
        <Input
          label="Post code"
          id="postCode"
          name="postCode"
          error={checkFormikError(form, "postCode")}
          value={form.values.postCode}
          onChange={form.handleChange}
        />
      </div>
      <Input
        label="Address"
        id="address"
        name="address"
        error={checkFormikError(form, "address")}
        value={form.values.address}
        onChange={form.handleChange}
      />
      <PhoneInput
        country="us"
        id="phone"
        name="phone"
        isValid={!form.errors.phone}
        onChange={(phone, country) =>
          form.setValues({
            ...form.values,
            phone: phone,
          })
        }
        value={form.values.phone}
        inputStyle={{ width: "100%" }}
      />
      <Title variant="h4" tiny={true}>
        Payment method
      </Title>
      <div className={styles.paymentCheckboxes}>
        <div className={styles.checkbox}>
          <Checkbox
            type="radio"
            name="paymentMethod"
            value={PAYMENT_METHODS.cash}
            onChange={handlePaymentMethodChange}
            checked={isSelectedMethod(PAYMENT_METHODS.cash)}
          />
          Cash
        </div>
        <div className={styles.checkbox}>
          <Checkbox
            type="radio"
            name="paymentMethod"
            value={PAYMENT_METHODS.card}
            onChange={handlePaymentMethodChange}
            checked={isSelectedMethod(PAYMENT_METHODS.card)}
          />
          Card
        </div>
      </div>
      {form.values.paymentMethod === PAYMENT_METHODS.card ? (
        <>
          <Input label="Card Number" />
          <div className={styles.doubleInput}>
            <Input label="Expiration Year" />
            <Input label="Expiration Month" />
          </div>
          <div className={styles.doubleInput}>
            <Input label="CVV" />
            <Input label="Postal code" />
          </div>
        </>
      ) : (
        ""
      )}
    </form>
  );
};

export default PaymentForm;

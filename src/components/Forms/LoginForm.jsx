import { useFormik } from "formik";
import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setAuthError, signIn } from "../../redux/actions/user";
import { Button, Input } from "../ui";

const schema = yup.object().shape({
  phone: yup.string().required("Required field"),
  password: yup.string().required("Required field"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { authError } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setAuthError(null));
  }, []);

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signIn(values.phone, values.password));
    },
    onChange: () => {
      if (authError) {
        dispatch(setAuthError(null));
      }
    },
    validationSchema: schema,
  });

  const onSignUpClick = (e) => {
    //e.preventDefault();
    navigate("/auth/sign-up");
  };

  return (
    <div className="login-form">
      <form className="login-form__content" onSubmit={formik.handleSubmit}>
        <PhoneInput
          country="us"
          id="phone"
          name="phone"
          isValid={!formik.errors.phone}
          onChange={(phone, country) =>
            formik.setValues({
              ...formik.values,
              phone: phone,
            })
          }
          value={formik.values.phone}
          className="login-form__phone"
          inputStyle={{ width: "100%" }}
          data-testid="phone"
        />
        <Input
          label="Password"
          type="password"
          className="login-form__password"
          data-testid="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <div className="login-form__buttons">
          <Button
            type="button"
            className="login-form__button button--default button--light"
            onClick={onSignUpClick}
          >
            <span>Sign up</span>
          </Button>
          <Button
            type="submit"
            className="login-form__button button--default button--orange"
            data-testid="signin-button"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <div className="login-form__error">{authError}</div>
      </form>
    </div>
  );
};

export default LoginForm;

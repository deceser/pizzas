import { useFormik } from "formik";
import React, { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { setAuthError, signUp } from "../../redux/actions/user";
import { Button, Input } from "../ui";

const SignUpForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(setAuthError(null));
	}, []);

	const { authError } = useSelector((state) => state.user);

	const schema = yup.object().shape({
		phone: yup.string().required("Required field"),
		password: yup.string().required("Required field"),
	});

	const formik = useFormik({
		initialValues: {
			phone: "",
			password: "",
		},
		onSubmit: (values) => {
			dispatch(signUp(values.phone, values.password));
		},
		validationSchema: schema,
	});

	const onSignInClick = (e) => {
		e.preventDefault();
		navigate("/auth/sign-in");
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
				/>
				<Input
					label="Password"
					type="password"
					className="login-form__password"
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
						onClick={onSignInClick}
					>
						<span>Sign in</span>
					</Button>
					<Button
						type="submit"
						className="login-form__button button--default button--orange"
					>
						<span>Sign up</span>
					</Button>
				</div>
				<div className="login-form__error">{authError}</div>
			</form>
		</div>
	);
};

export default SignUpForm;

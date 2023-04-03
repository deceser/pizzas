import React, { useEffect } from "react";
import LoginForm from "../components/Forms/LoginForm";
import { useSelector } from "react-redux";
import { Loader } from "../components";
import { setUserLoading } from "../redux/actions/user";

const SignIn = () => {
	const { isLoading } = useSelector((state) => state.user);

	useEffect(() => {
		if (isLoading) {
			setUserLoading(false);
		}
	}, []);

	return (
		<div className="container container--medium">
			{isLoading ? <Loader /> : <LoginForm />}
		</div>
	);
};

export default SignIn;

import React, { useEffect } from "react";
import { Loader, SignUpForm } from "../components";
import { useSelector } from "react-redux";
import { setUserLoading } from "../redux/actions/user";

export const SignUp = () => {
	const { isLoading } = useSelector((state) => state.user);

	useEffect(() => {
		if (isLoading) {
			setUserLoading(false);
		}
	}, []);

	return (
		<div className="container container--medium">
			{isLoading ? <Loader /> : <SignUpForm />}
		</div>
	);
};

export default SignUp;

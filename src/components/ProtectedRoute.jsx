import React from "react";
import { Navigate } from "react-router-dom";
import { useRole } from "../hooks";

const ProtectedRoute = ({ children, mustBeAuth, isAuth, allowedRoles }) => {
	const role = useRole();
	if (allowedRoles) {
		if (!allowedRoles.find((item) => item === role)) {
			return <Navigate to="/" replace />;
		}
	}

	if (mustBeAuth && !isAuth) {
		return <Navigate to="/auth/sign-in" replace />;
	}

	if (!mustBeAuth && isAuth) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default ProtectedRoute;

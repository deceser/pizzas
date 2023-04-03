import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaSizes, getPizzaTypes } from "../../../redux/actions/pizzas";
import { setAdminPizzaType } from "../../../redux/actions/admin";
import Sizes from "./Sizes";
import Types from "./Types";

const Properties = () => {
	const dispatch = useDispatch();

	const { types } = useSelector((state) => state.pizzas);

	const onTypesSubmit = async (type) => {
		dispatch(setAdminPizzaType(type));
	};

	useEffect(() => {
		dispatch(getPizzaTypes());
		dispatch(getPizzaSizes());
	}, []);

	return (
		<div className="admin-properties">
			<Sizes />
			<Types />
		</div>
	);
};

export default Properties;

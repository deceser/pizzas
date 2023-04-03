import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { getPizzasSales } from "../../../redux/actions/admin";

const TotalPizzaSales = () => {
	const dispatch = useDispatch();

	const { pizzasSales } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(getPizzasSales());
	}, []);

	return (
		<div className="statistics__item">
			<h2 className="statistics__title">Total pizzas sales</h2>
			<div className="chart-container">
				<ResponsiveContainer width="100%" height={500}>
					<BarChart data={pizzasSales}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="sales" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TotalPizzaSales;

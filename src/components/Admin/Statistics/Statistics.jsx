import React from "react";
import SalesByInterval from "./SalesByInterval";
import TotalPizzaSales from "./TotalPizzasSales";

const Statistics = () => {
	return (
		<div className="container statistics">
			<TotalPizzaSales />
			<SalesByInterval />
		</div>
	);
};

export default Statistics;

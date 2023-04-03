const useTotalSales = (data) => {
	let sum = 0;

	for (let item of data) {
		sum += item.sales;
	}

	return sum;
};

export default useTotalSales;

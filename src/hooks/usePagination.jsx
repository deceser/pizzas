import { useCallback } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (totalRows, rowsPerPage) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [page, setPage] = useState(
		searchParams.get("page") ? searchParams.get("page") - 1 : 0
	);

	const handlePageClick = useCallback(({ selected }) => {
		setPage(selected);
		if (selected > 0) setSearchParams({ page: selected + 1 });
		else {
			setSearchParams({});
		}
	}, []);

	return {
		page,
		initialPage: page,
		totalRows,
		rowsPerPage,
		handlePageClick,
	};
};

export default usePagination;

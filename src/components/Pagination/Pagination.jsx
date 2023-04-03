import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
	                    initialPage = 0,
	                    handlePageClick,
	                    totalRows,
	                    rowsPerPage,
	                    pageRangeDisplayed = 3,
                    }) => {
	const pageCount = Math.ceil(totalRows / rowsPerPage);
	
	return pageCount > 1 ? (
		<ReactPaginate
			initialPage={initialPage}
			breakLabel="..."
			nextLabel=">"
			onPageChange={handlePageClick}
			pageRangeDisplayed={pageRangeDisplayed}
			pageCount={pageCount}
			previousLabel="<"
			renderOnZeroPageCount={null}
			className="pagination"
			pageClassName="pagination__item"
			pageLinkClassName="pagination__link"
			activeLinkClassName="pagination__link--acitve"
			previousClassName="pagination__link"
			nextClassName="pagination__link"
		/>
	) : (
		""
	);
};

export default Pagination;

import { useState } from "react";

export const usePagination = (totalItems, itemsPerPage) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(
		Math.ceil(totalItems / itemsPerPage),
	);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return {
		currentPage,
		totalPages,
		handlePageChange,
		setTotalPages,
		setCurrentPage,
	};
};

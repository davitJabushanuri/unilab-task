import { ArrowLeftIcon } from "../assets/arrow-left-icon";
import { ArrowRightIcon } from "../assets/arrow-right-icon";
import { ArrowsLeftIcon } from "../assets/arrows-left-icon";
import { ArrowsRightIcon } from "../assets/arrows-right-icon";
import styles from "./styles/pagination.module.css";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className={styles.container}>
			<button
				aria-label="Navigate to the first page"
				disabled={currentPage === 1}
				onClick={() => onPageChange(1)}
			>
				<ArrowsLeftIcon />
			</button>

			<button
				aria-label="Previous page"
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				<ArrowLeftIcon />
			</button>
			{pageNumbers.map((number) => (
				<button
					key={number}
					className={number === currentPage ? styles.active : ""}
					onClick={() => onPageChange(number)}
					tabIndex={number === currentPage ? -1 : 0}
				>
					{number}
				</button>
			))}
			<button
				aria-label="Next page"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				<ArrowRightIcon />
			</button>

			<button
				aria-label="Navigate to the last page"
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(totalPages)}
			>
				<ArrowsRightIcon />
			</button>
		</div>
	);
};

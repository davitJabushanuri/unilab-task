import { ArrowLeftIcon } from "../assets/arrow-left-icon";
import { ArrowRightIcon } from "../assets/arrow-right-icon";
import { ArrowsLeftIcon } from "../assets/arrows-left-icon";
import { ArrowsRightIcon } from "../assets/arrows-right-icon";
import styles from "./styles/pagination.module.css";

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav aria-label="Pagination" className={styles.container}>
			<button
				role="link"
				aria-label="Go to the first page"
				aria-disabled={currentPage === 1}
				disabled={currentPage === 1}
				onClick={() => onPageChange(1)}
			>
				<ArrowsLeftIcon />
			</button>

			<button
				role="link"
				aria-label={`Go to previous page, page ${currentPage - 1}`}
				aria-disabled={currentPage === 1}
				disabled={currentPage === 1}
				onClick={() => onPageChange(currentPage - 1)}
			>
				<ArrowLeftIcon />
			</button>
			{pageNumbers.map((number) => {
				return currentPage === number ? (
					<span
						key={number}
						className={styles.active}
						aria-label={`Current page, page ${number}`}
					>
						{number}
					</span>
				) : (
					<button
						role="link"
						key={number}
						className={number === currentPage ? styles.active : ""}
						onClick={() => onPageChange(number)}
						aria-label={`Go to page ${number}`}
					>
						{number}
					</button>
				);
			})}
			<button
				role="link"
				aria-label={`Go to next page, ${currentPage + 1}`}
				aria-disabled={currentPage === totalPages}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(currentPage + 1)}
			>
				<ArrowRightIcon />
			</button>

			<button
				role="link"
				aria-label="Go to the last page"
				aria-disabled={currentPage === totalPages}
				disabled={currentPage === totalPages}
				onClick={() => onPageChange(totalPages)}
			>
				<ArrowsRightIcon />
			</button>
		</nav>
	);
};

import { FilterIcon } from "../assets/filter-icon";
import styles from "./styles/open-filter.module.css";
import { useFilter } from "../hooks/useFilter";

export const OpenFilter = () => {
	const { isFilterOpen, openFilter, closeFilter } = useFilter();

	return (
		<button
			id="filter-button"
			onClick={async () => {
				if (isFilterOpen) {
					closeFilter();
				} else {
					await openFilter();
					const filter = document.querySelector(`#filter`);
					if (filter) {
						const firstFocusableElement = filter.querySelector(
							"button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
						);
						if (firstFocusableElement) {
							firstFocusableElement.focus();
						}
					}
				}
			}}
			className={styles.container}
		>
			<FilterIcon />
			<span>filter</span>
		</button>
	);
};

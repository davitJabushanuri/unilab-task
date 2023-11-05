import { FilterIcon } from "../assets/filter-icon";
import styles from "./styles/open-filter.module.css";
import { useFilter } from "../hooks/useFilter";

export const OpenFilter = () => {
	const { toggleFilter } = useFilter();

	return (
		<button onClick={toggleFilter} className={styles.container}>
			<FilterIcon />
			<span>filter</span>
		</button>
	);
};

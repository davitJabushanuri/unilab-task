import { FilterIcon } from "../assets/filter-icon";
import styles from "./styles/open-filter.module.css";
import { useData } from "../hooks/useData";

export const OpenFilter = () => {
	const { toggleFilter } = useData();

	return (
		<button onClick={toggleFilter} className={styles.container}>
			<FilterIcon />
			<span>filter</span>
		</button>
	);
};

import { Filter } from "./filter";
import { OpenFilter } from "./open-filter";
import { Search } from "./search";
import styles from "./styles/filter-form.module.css";

export const FilterForm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.filters}>
				<OpenFilter />
				<div className={styles.filterContainer}>
					<Filter />
				</div>
				<Search />
			</div>
		</div>
	);
};

import { FilterContainer } from "./filter-container";
import { OpenFilter } from "./open-filter-button";
import { Search } from "./search";
import styles from "./styles/filter-form.module.css";
import { Table } from "./table";

export const FilterForm = () => {
	return (
		<div className={styles.container}>
			<div className={styles.filters}>
				<OpenFilter />
				<div className={styles.filterContainer}>
					<FilterContainer />
				</div>
				<Search />
			</div>

			<div className={styles.table}>
				<Table />
			</div>
		</div>
	);
};

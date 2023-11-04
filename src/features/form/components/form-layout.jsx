import { Filter } from "./filter";
import { FilterForm } from "./filter-form";
import styles from "./styles/form-layout.module.css";

export const FormLayout = () => {
	return (
		<div className={styles.container}>
			<div className={styles.filterContainer}>
				<Filter />
			</div>

			<FilterForm />

			<div className={styles.placeholder} />
		</div>
	);
};

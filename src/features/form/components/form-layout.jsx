import { FilterForm } from "../components/filter-form";
import { Filter } from "./filter";
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

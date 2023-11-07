import { SearchIcon } from "../assets/search-icon";
import { useFilter } from "../hooks/useFilter";
import styles from "./styles/search.module.css";

export const Search = () => {
	const { searchData } = useFilter();

	return (
		<label
			aria-label="Search table"
			htmlFor="search"
			className={styles.container}
		>
			<SearchIcon />
			<input
				id="search"
				role="combobox"
				onChange={(e) => searchData(e.target.value)}
				type="text"
				placeholder="Search"
			/>
		</label>
	);
};

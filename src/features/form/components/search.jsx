import { SearchIcon } from "../assets/search-icon";
import { useData } from "../hooks/useData";
import styles from "./styles/search.module.css";

export const Search = () => {
	const { searchData } = useData();

	return (
		<div className={styles.container}>
			<label htmlFor="search">
				<SearchIcon />
				<input
					onChange={(e) => searchData(e.target.value)}
					id="search"
					type="text"
					placeholder="Search"
				/>
			</label>
		</div>
	);
};

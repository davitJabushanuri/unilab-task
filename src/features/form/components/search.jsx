import { SearchIcon } from "../assets/search-icon";
import styles from "./styles/search.module.css";

export const Search = () => {
	return (
		<div className={styles.container}>
			<label htmlFor="search">
				<SearchIcon />
				<input id="search" type="text" placeholder="Search" />
			</label>
		</div>
	);
};

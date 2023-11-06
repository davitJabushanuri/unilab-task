import { Navbar } from "../navbar";
import { UserInfo } from "../user-info";
import styles from "./header.module.css";

export const Header = () => {
	return (
		<header className={styles.container}>
			<Navbar />
			<UserInfo />
		</header>
	);
};

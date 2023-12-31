import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
	return (
		<nav aria-label="Primary" className={styles.container}>
			<Link to="/">Home</Link>
			<Link to="/people">API</Link>
		</nav>
	);
};

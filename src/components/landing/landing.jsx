import { WritingIcon } from "../../assets/writing-icon";
import styles from "./landing.module.css";
import { Link } from "react-router-dom";

export const Landing = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<WritingIcon />
			</div>

			<h1>Get Started Today</h1>

			<Link to="/login">Get started</Link>
		</div>
	);
};

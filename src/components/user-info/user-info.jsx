import styles from "./user-info.module.css";

export const UserInfo = () => {
	const getUser = () => {
		const user = localStorage.getItem("user");
		return JSON.parse(user);
	};

	const user = getUser();

	return (
		<div className={styles.container}>
			<span>{user.name}</span>
			<button
				aria-label="Open user menu"
				aria-haspopup="true"
				aria-expanded="false"
			>
				<img src={user.image} alt="User profile picture" />
			</button>
		</div>
	);
};

import { useState } from "react";
import styles from "./user-info.module.css";
import { Modal, ModalBackdrop } from "../modal";
import { signOut } from "../../features/auth/utils/signout";

export const UserInfo = () => {
	const getUser = () => {
		const user = localStorage.getItem("user");
		return JSON.parse(user);
	};

	const user = getUser();

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className={styles.container}>
				<span>{user.name}</span>
				<button
					aria-label="Open user menu"
					aria-haspopup="true"
					aria-expanded={isModalOpen}
					onClick={() => setIsModalOpen(true)}
				>
					<img src={user.image} alt="User profile picture" />
				</button>
			</div>

			{isModalOpen && (
				<ModalBackdrop onClose={() => setIsModalOpen(false)}>
					<Modal onClose={() => setIsModalOpen(false)}>
						<div className={styles.modalContent}>
							<img src={user.image} alt="User profile picture" />
							<span>{user.name}</span>

							<button className={styles.signOut} onClick={signOut}>
								Sign out
							</button>
						</div>
					</Modal>
				</ModalBackdrop>
			)}
		</>
	);
};

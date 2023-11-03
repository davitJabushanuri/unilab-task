import { CloseIcon } from "../../../assets/close-icon";
import styles from "./styles/modal.module.css";

export const Modal = ({ children, onClose }) => {
	return (
		<div className={styles.container}>
			<button
				title="Close"
				className={styles.close}
				onClick={onClose}
				aria-label="Close modal"
			>
				<CloseIcon />
			</button>
			{children}
		</div>
	);
};

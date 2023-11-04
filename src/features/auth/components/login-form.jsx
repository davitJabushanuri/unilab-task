import { useRef, useState } from "react";
import { PhotoIcon } from "../assets/photo-icon";
import styles from "./styles/login-form.module.css";
import { chooseImage } from "../utils/choose-image";
import { CloseIcon } from "@/assets/close-icon";
import { signIn } from "../utils/signin";

export const LoginForm = () => {
	const [user, setUser] = useState({
		image: "",
		name: "",
	});

	const inputRef = useRef(null);

	return (
		<div className={styles.container}>
			<form>
				<h2>Get Started</h2>
				<span>add a photo</span>

				<div className={styles.imageInput}>
					<input
						ref={inputRef}
						type="file"
						className={styles.fileInput}
						onChange={(e) => chooseImage(e, setUser)}
					/>
					{user.image ? (
						<button
							aria-label="remove a photo"
							type="button"
							onClick={() => setUser((prev) => ({ ...prev, image: "" }))}
						>
							<img src={user.image} alt="user" />
							<span className={styles.delete}>
								<CloseIcon />
							</span>
						</button>
					) : (
						<button
							aria-label="Add a photo"
							type="button"
							onClick={() => inputRef.current.click()}
						>
							<PhotoIcon />
						</button>
					)}
				</div>

				<span>fill in your name</span>

				<div className={styles.nameInput}>
					<input
						type="text"
						placeholder="Your name"
						value={user.name}
						onChange={(e) =>
							setUser((prev) => ({
								...prev,
								name: e.target.value,
							}))
						}
					/>
				</div>

				<button
					disabled={!user.image || !user.name}
					className={styles.submit}
					type="submit"
					onClick={(e) => signIn(e, user, setUser)}
				>
					Sign in
				</button>
			</form>
		</div>
	);
};

export const chooseImage = (e, setUser) => {
	const file = e.target.files[0];
	e.target.value = "";

	const reader = new FileReader();

	reader.onload = () => {
		setUser((prev) => ({
			...prev,
			image: reader.result,
		}));
	};

	reader.readAsDataURL(file);
};

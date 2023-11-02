export const signIn = (e, user, setUser) => {
	e.preventDefault();

	try {
		window.localStorage.setItem("user", JSON.stringify(user));
		window.location.href = "/form";
		setUser({
			image: "",
			name: "",
		});
	} catch (error) {
		alert("There was an error signing in", error.message);
	}
};

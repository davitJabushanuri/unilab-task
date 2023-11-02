export const signIn = (e, user, setUser) => {
	e.preventDefault();
	window.localStorage.setItem("user", JSON.stringify(user));
	const savedUser = JSON.parse(window.localStorage.getItem("user"));

	if (!savedUser) {
		alert("There was an error signing in");
		return;
	}

	window.location.href = "/form";
	setUser({
		image: "",
		name: "",
	});
};

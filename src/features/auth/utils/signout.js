export const signOut = () => {
	window.localStorage.removeItem("user");
	window.location.href = "/";
};

// Firebase
import { auth } from "../firebase";

// Handle Input
const handleInput = (e, setLogin) => {
	setLogin((prev) => {
		return {
			...prev,
			[e.target.name]: e.target.value,
		};
	});
};

// Handle Submit
const handleSubmit = (e, login, setErr, setLoading) => {
	e.preventDefault();
	setLoading(true);

	auth.signInWithEmailAndPassword(login.email, login.password)
		.then(() => {
			setLoading(false);
			window.location = "/";
		})
		.catch((error) => {
			setLoading(false);
			if (error.code === "auth/user-not-found") {
				setErr("User not exist with this email...");
			} else {
				setErr("The password is invalid...");
			}
		});
};

// Export
export { handleInput, handleSubmit };

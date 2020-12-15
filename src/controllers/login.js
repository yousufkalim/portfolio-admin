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
const handleSubmit = (e, login, setErr) => {
	e.preventDefault();

	auth.signInWithEmailAndPassword(login.email, login.password)
		.then(() => {
			window.location = "/";
		})
		.catch(() => {
			setErr("Email or password is incorrect");
		});
};

// Export
export { handleInput, handleSubmit };

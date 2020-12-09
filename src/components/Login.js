// Init
import React, { useState } from "react";
import axios from "axios";

//Style
import "../style/Login.css";

//Component
function Login() {
	//Initializing States
	let [login, setLogin] = useState({ email: "", password: "" });
	let [err, setErr] = useState("");

	//Handle Input
	const handleInput = (e) => {
		setLogin((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	//Handle Submit
	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("/login", login)
			.then(() => {
				window.location = "/";
			})
			.catch(() => setErr("Email or password is incorrect"));
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} style={{ width: "25%" }}>
				<h2>Login</h2>
				{err ? (
					<div className="alert">
						<button
							type="button"
							className="close"
							onClick={() => setErr("")}
						>
							&times;
						</button>
						<strong>{err}</strong>
					</div>
				) : null}
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={Login.email}
					onChange={handleInput}
					required
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={Login.password}
					onChange={handleInput}
					required
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

//Export
export default Login;

// Init
import React, { useState } from "react";
import { handleInput, handleSubmit } from "../controllers/login";

//Component
function Login() {
	//Initializing States
	let [login, setLogin] = useState({ email: "", password: "" });
	let [err, setErr] = useState("");

	// Component Render
	return (
		<div className="form-container">
			<form
				onSubmit={(e) => handleSubmit(e, login, setErr)}
				style={{ width: "25%" }}
			>
				<h2>Login</h2>
				{err ? (
					<div className="alert error">
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
					onChange={(e) => handleInput(e, setLogin)}
					required
					autoFocus
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={Login.password}
					onChange={(e) => handleInput(e, setLogin)}
					required
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

//Export
export default Login;
